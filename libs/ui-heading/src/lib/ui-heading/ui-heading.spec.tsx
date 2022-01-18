import { render } from '@testing-library/react';

import UiHeading from './ui-heading';

describe('UiHeading', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiHeading />);
    expect(baseElement).toBeTruthy();
  });
});
