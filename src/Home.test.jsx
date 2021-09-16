import React from 'react';

import { render } from '@testing-library/react';

import Home from './Home';

describe('renders learn react link', () => {
  it('rendering app page #1', () => {
    const { getByText } = render(<Home />);

    expect(getByText(/Home/)).not.toBeNull();
  });

  it('rendering app page #2', () => {
    const { container } = render(<Home />);

    expect(container.textContent).toBe('Hello? Home!');
  });
});
