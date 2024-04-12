import { render, screen } from '@testing-library/react';
import NotFound from './not-found';

describe('Component: NotFound', () => {
  it('should render correct', () => {
    const expectedText = /The page you are looking for can not be found/i;

    render(<NotFound />);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
