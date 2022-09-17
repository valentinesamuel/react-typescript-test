import { render, screen, fireEvent } from '@testing-library/react';
import ButtonWrapper from '../component/ButtonWrapper';

test('handles onClick', () => {
    const onclick = jest.fn()
    render(<ButtonWrapper onClick={onclick} title='Add Item'/>);
    const buttonElement = screen.getByText("Add Item");
    fireEvent.click(buttonElement)
    expect(onclick).toHaveBeenCalledTimes(1)
});
