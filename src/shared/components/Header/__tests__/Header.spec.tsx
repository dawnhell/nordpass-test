import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';

import Header from '../Header';

const mockLogout = jest.fn()
jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    replace: mockLogout
  }),
}));

describe('<Header />', () => {
  it('should show number of items and user name', () => {
    render(<Header numberOfItems={10} username="Wlad" />)

    expect(screen.getByText('10 Items are vulnerable')).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /Logout Wlad/ })).toBeInTheDocument();
  })

  /* Here we alsa can test Logout functionality, but first you need to setup some mock server,
  * for example MSW */
})
