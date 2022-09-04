import React from 'react';
import { render, screen } from '@testing-library/react';
import { Person } from '../component/Person';

test('renders a name', () => {
    render(<Person name="Valentine" />);
    const divElement = screen.getByRole("contentinfo");
    expect(divElement).toHaveTextContent("Name is Valentine");
    expect(divElement).toHaveAttribute("role", "contentinfo")
});
