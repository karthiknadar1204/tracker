import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  try {
    // Read request body
    const body = await req.json();
    // console.log("Webhook payload:", body);

    // Validate request method
    if (req.method !== "POST") {
      return NextResponse.json(
        { message: "Method Not Allowed" },
        { status: 405 }
      );
    }

    // Validate webhook secret
    const signature = req.headers.get("X-Hub-Signature-256") || "";
    console.log("Received signature:", signature);
    const secret = process.env.WEBHOOK_SECRET;
    if (!secret) {
      return NextResponse.json(
        { message: "Webhook secret is not defined" },
        { status: 500 }
      );
    }
    console.log("Expected signature:", secret);


    const hmac = crypto
      .createHmac("sha256", secret)
      .update(JSON.stringify(body))
      .digest("hex");
    console.log("Computed HMAC:", hmac);
    if (`sha256=${hmac}` !== signature) {
      return NextResponse.json(
        { message: "Invalid signature" },
        { status: 401 }
      );
    }


    const event = req.headers.get("X-GitHub-Event");
    if (!event) {
      return NextResponse.json(
        { message: "Missing GitHub event header" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        data: {
          message: "Webhook processed successfully",
          secret: secret,
          signature: signature,
          hmac: hmac,
          event: event,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Webhook processing error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
