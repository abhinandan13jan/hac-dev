import { PipelineRunKind } from '../types';

type Commit = {
  sha: string;
  branch: string;
  creationTime: string;
  pipelineRuns: PipelineRunKind[];
};

export const COMMIT_ANNOTATION = 'build.appstudio.redhat.com/commit_sha';
export const COMMIT_BRANCH_ANNOTATION = 'build.appstudio.redhat.com/target_branch';

export const pipelineRunstoCommits = (plrList: PipelineRunKind[], limit?: number) => {
  const commits: Commit[] = [];
  plrList.map((plr) => {
    const commitSHA = plr.metadata.annotations?.[COMMIT_ANNOTATION];
    const commitBranch = plr.metadata.annotations?.[COMMIT_BRANCH_ANNOTATION];
    const creationTime = plr.metadata.creationTimestamp;

    if (commitSHA) {
      const existingCommitIndex = commits.findIndex((commit) => commit.sha === commitSHA);
      if (existingCommitIndex > -1) {
        if (commits[existingCommitIndex].creationTime < creationTime) {
          commits[existingCommitIndex].creationTime = creationTime;
        }
        commits[existingCommitIndex].pipelineRuns.push(plr);
      } else {
        commits.push({ sha: commitSHA, branch: commitBranch, creationTime, pipelineRuns: [plr] });
      }
    }
  });
  return limit ? commits.slice(0, limit) : commits;
};
