import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  EmptyState,
  EmptyStateIcon,
  Title,
  EmptyStateBody,
  Button,
  EmptyStateSecondaryActions,
} from '@patternfly/react-core';
import { OutlinedFileImageIcon } from '@patternfly/react-icons/dist/esm/icons/outlined-file-image-icon';
import { pipelineRunstoCommits } from '../../../utils/commits-utils';
import { pipelineWithCommits } from '../../Commits/pipeline-with-commits-mock';

type CommitTabProps = {
  applicationName: string;
};

const CommitsTab: React.FC<CommitTabProps> = ({ applicationName }) => {
  const commits = pipelineRunstoCommits(pipelineWithCommits);
  return !commits || commits.length === 0 ? (
    <EmptyState>
      <EmptyStateIcon icon={OutlinedFileImageIcon} />
      <Title headingLevel="h4" size="lg">
        Monitor your commits and their pipeline progression across all components
      </Title>
      <EmptyStateBody>
        No commits found yet. <br />
        To get started, create components and merge their pull request for build pipeline.
      </EmptyStateBody>
      <EmptyStateSecondaryActions>
        <Button
          component={(props) => (
            <Link
              {...props}
              to={`/app-studio/applications?name=${applicationName}&activeTab=components&hacbs=true`}
            />
          )}
          variant="secondary"
        >
          Go to components tab
        </Button>
      </EmptyStateSecondaryActions>
    </EmptyState>
  ) : (
    <>
      {commits.map((commit) => (
        <div key={commit.sha}>
          <b>{commit.sha}</b> {commit.branch} {commit.pipelineRuns.length}
        </div>
      ))}
    </>
  );
};

export default CommitsTab;
