import { render, screen, fireEvent } from '@testing-library/react';
import { Counter } from '../component/Counter';

test('increases count', () => {
    render(<Counter />);

    const divElement = screen.getByRole("contentinfo");
    const buttonElement = screen.getByText('Add One')
    fireEvent.click(buttonElement)


    expect(divElement).toHaveTextContent("Count is 1")
});
