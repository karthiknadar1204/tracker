import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { processPR } from "@/app/actions/pr";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("Webhook payload:", body);

    // Validate webhook secret
    const signature = req.headers.get("X-Hub-Signature-256") || "";
    const secret = process.env.WEBHOOK_SECRET as string;
    
    const hmac = crypto
      .createHmac("sha256", secret)
      .update(JSON.stringify(body))
      .digest("hex");

    if (`sha256=${hmac}` !== signature) {
      return NextResponse.json(
        { message: "Invalid signature" },
        { status: 401 }
      );
    }

    // Get event type
    const event = req.headers.get("X-GitHub-Event");
    console.log("GitHub event:", event);

    // Handle PR events
    if (event === "pull_request") {
      console.log("PR event received:", body.action);
      if (["opened", "synchronize"].includes(body.action)) {
        const prUrl = body.pull_request.url;
        console.log("Processing PR:", prUrl);
        await processPR(prUrl);
      }
    }

    return NextResponse.json(
      { message: "Webhook processed successfully" },
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