import React from 'react';

import { render } from '@testing-library/react';

import PageNotFound from './PageNotFound';

describe('PageNotFound 렌더링될 때', () => {
  it('Not Found 보인다', () => {
    const { container } = render(<PageNotFound />);

    expect(container).toHaveTextContent('NOT FOUND');
  });
});
