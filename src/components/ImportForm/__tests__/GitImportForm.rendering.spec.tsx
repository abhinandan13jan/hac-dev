import React from 'react';
import { useK8sWatchResource } from '@openshift/dynamic-plugin-sdk-utils';
import { render, screen, configure } from '@testing-library/react';
import { mockLimitRange } from '../../../hooks/__data__/mock-data';
import GitImportForm from '../GitImportForm';

jest.mock('../../../utils/analytics');

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

jest.mock('../../../utils/workspace-context-utils', () => ({
  useWorkspaceInfo: jest.fn(() => ({ namespace: 'test-ns', workspace: 'test-ws' })),
}));

jest.mock('../SourceSection/SourceSection', () => () => {
  return <div data-test="source-section" />;
});

jest.mock('../ReviewSection/ReviewSection', () => () => {
  return <div data-test="review-section" />;
});

jest.mock('@openshift/dynamic-plugin-sdk-utils', () => ({
  useK8sWatchResource: jest.fn(),
}));

configure({ testIdAttribute: 'data-test' });

const watchResourceMock = useK8sWatchResource as jest.Mock;

describe('GitImportForm rendering', () => {
  let setReviewModeMock;

  beforeEach(() => {
    setReviewModeMock = jest.fn();
    watchResourceMock.mockReturnValue([[mockLimitRange], true]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render correct section, title and actions for source step', () => {
    render(
      <GitImportForm applicationName="" reviewMode={false} setReviewMode={setReviewModeMock} />,
    );

    screen.getByTestId('source-section');
    screen.getByText('Bring in your own code');
    screen.getByText("You provide the code and we'll create an application.");
    screen.getByRole('button', { name: 'Import code' });
  });

  it('should render correct section, title and actions for review step', () => {
    render(
      <GitImportForm applicationName="" reviewMode={true} setReviewMode={setReviewModeMock} />,
    );

    screen.getByTestId('review-section');
    screen.getByText('Review and configure for deployment');
    screen.getByRole('button', { name: 'Create application' });
    screen.getByRole('button', { name: 'Back' });
    screen.getByRole('button', { name: 'Cancel' });
  });
});
