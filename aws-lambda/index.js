import { Octokit } from "octokit"

export async function handler(event) {


  // Octokit.js
  // https://github.com/octokit/core.js#readme
  const octokit = new Octokit({
    auth: process.env.GITHUB_PAT
  })

  await octokit.request('POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches', {
    owner: "ridgeway-warrior",
    repo: 'ridgeway-warrior',
    workflow_id: '310950249',
    ref: 'master',
    headers: {
      'X-GitHub-Api-Version': '2026-03-10'
    }
  })

  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda!'),
  };
  return response;

}