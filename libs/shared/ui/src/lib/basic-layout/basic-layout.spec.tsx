import { render } from '@testing-library/react';

import BasicLayout from './basic-layout';

describe('BasicLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BasicLayout />);
    expect(baseElement).toBeTruthy();
  });
});
