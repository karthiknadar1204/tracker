// PR processing logic

// 1. Get the PR
// 2. Get the feedback
// 3. Post the feedback
// 4. Update the PR
import axios from "axios";


export async function processPR(prUrl: string): Promise<void> {
  try {
    console.log("Processing PR:", prUrl);

    // Extract user, repo, and PR number from the URL
    const user = prUrl.split("/")[4];
    const repo = prUrl.split("/")[5];
    const prNumber = prUrl.split("/")[7];

    // Construct the diff URL
    const diffUrl = `https://github.com/${user}/${repo}/pull/${prNumber}`;
    console.log("Diff URL:", diffUrl);

    // Make the API call to get the PR diff
    const diffResponse = await axios.get(`${diffUrl}.diff`, {
      headers: { 
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3.diff"
      },
    });

    console.log("Diff response:", diffResponse.status, diffResponse.statusText);
    const diff = diffResponse.data;
    console.log("Diff:", diff);

    // Parse the diff to get changes
    const changes = parseDiff(diff);
    console.log("Changes:", changes);

    if (changes.length === 0) {
      throw new Error("No significant changes detected in this PR.");
    }

    return changes;
  } catch (error) {
    console.error("PR processing failed:", error);
    throw error;
  }
}

function parseDiff(diff: string): { file: string; type: "add" | "remove"; line: string }[] {
  const changes: { file: string; type: "add" | "remove"; line: string }[] = [];
  let currentFile: string | null = null;

  try {
    if (!diff || typeof diff !== "string") {
      console.error("parseDiff: Invalid diff input, expected a string.");
      return [];
    }

    const lines = diff.split("\n");
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // Detect file changes
      if (line.startsWith("diff --git")) {
        const match = line.match(/b\/(.+)/); 
        if (match) {
          currentFile = match[1].trim();
        } else {
          console.warn(`parseDiff: Unable to extract filename from line: ${line}`);
        }
      }


      else if (line.startsWith("+") && !line.startsWith("+++")) {
        if (currentFile) {
          const addedLine = line.slice(1).trim();
          if (addedLine.length > 0) {
            changes.push({ file: currentFile, type: "add", line: addedLine });
          }
        }
      }

      // Detect removed lines (ignoring metadata changes)
      else if (line.startsWith("-") && !line.startsWith("---")) {
        if (currentFile) {
          const removedLine = line.slice(1).trim();
          if (removedLine.length > 0) {
            changes.push({
              file: currentFile,
              type: "remove",
              line: removedLine,
            });
          }
        }
      }
    }
  } catch (error) {
    console.error("parseDiff: Error while parsing diff:", error);
  }

  return changes;
}