// Posting feedback to PR

// 1. Get the PR
// 2. Get the feedback
// 3. Post the feedback
// 4. Update the PR

import axios from "axios";

export async function postFeedback(
  prUrl: string,
  feedback: string
): Promise<void> {
  const body = `KitKat Review:\n${feedback}`;
  const user = prUrl.split("/")[4];
  const repo = prUrl.split("/")[5];
  const prNumber = prUrl.split("/")[7];
  const githubToken = process.env.GITHUB_TOKEN!;

    // pr url - https://api.github.com/repos/karthiknadar1204/botarmy/pulls/16
  // const url = `https://api.github.com/repos/${owner}/${repo}/issues/${prNumber}/comments`;

  const commentUrl = `https://api.github.com/repos/${user}/${repo}/issues/${prNumber}/comments`;
  console.log("Comment URL:", commentUrl);
  console.log("GitHub Token:", githubToken);
  try { 
    const { data } = await axios.post(
      commentUrl,
      { body },
      {
        headers: {
          Authorization: `token ${githubToken}`,
          Accept: "application/vnd.github.v3+json",
        },
      }
    );

    console.log("Feedback posted:", data);
    return data;
  } catch (error) {
    console.error("Failed to post feedback:", error);
    console.error(JSON.stringify(error, null, 2));
  }
}
