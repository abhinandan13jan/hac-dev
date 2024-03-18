import * as React from 'react';
import '@testing-library/jest-dom';
import { act, configure, fireEvent, screen, waitFor } from '@testing-library/react';
import { useReleasePlans } from '../../../../../hooks/useReleasePlans';
import { formikRenderer } from '../../../../../utils/test-utils';
import { ReleasePlanDropdown } from '../ReleasePlanDropdown';

jest.mock('../../../../../hooks/useReleasePlans', () => ({
  useReleasePlans: jest.fn(),
}));

const useReleasePlansMock = useReleasePlans as jest.Mock;

describe('ReleasePlanDropdown', () => {
  beforeEach(() => {
    configure({ testIdAttribute: 'data-test' });
  });

  it('should show loading indicator if release plans arent loaded', () => {
    useReleasePlansMock.mockReturnValue([[], false]);
    formikRenderer(<ReleasePlanDropdown name="releasePlan" />);
    expect(screen.getByText('Loading release plans...')).toBeVisible();
  });

  it('should show dropdown if release plans are loaded', async () => {
    useReleasePlansMock.mockReturnValue([
      [{ metadata: { name: 'rp1' } }, { metadata: { name: 'rp2' } }],
      true,
    ]);
    formikRenderer(<ReleasePlanDropdown name="releasePlan" />);
    await act(async () => {
      fireEvent.click(screen.getByRole('button'));
    });

    expect(screen.getByRole('menuitem', { name: 'rp1' })).toBeVisible();
    expect(screen.getByRole('menuitem', { name: 'rp2' })).toBeVisible();
  });

  it('should change the release plan dropdown value', async () => {
    useReleasePlansMock.mockReturnValue([
      [{ metadata: { name: 'rp1' } }, { metadata: { name: 'rp2' } }],
      true,
    ]);

    formikRenderer(<ReleasePlanDropdown name="releasePlan" />, {
      targets: { application: 'app' },
    });
    expect(screen.queryByRole('button')).toBeInTheDocument();

    await act(async () => {
      fireEvent.click(screen.getByRole('button'));
    });

    waitFor(() => {
      expect(screen.getByRole('menu')).toBeInTheDocument();
      expect(screen.getByLabelText('Select release plan'));
      screen.getByText('rp2');
    });
    await act(async () => {
      fireEvent.click(screen.getByText('rp2'));
    });
    waitFor(() => {
      expect(screen.getByText('rp2'));
    });
  });
});
