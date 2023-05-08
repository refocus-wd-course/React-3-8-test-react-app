import { fireEvent, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Counter from './Counter';

test('renders', () => {
    render(<Counter />);
});

test('snapshot test', () => {
    const counter = renderer.create(<Counter />).toJSON();
    expect(counter).toMatchSnapshot();
});

test('increments', () => {
    render(<Counter />);

    const counterValue = screen.getByTestId('counter');
    expect(counterValue).toBeDefined();
    let counter = parseInt(counterValue.innerHTML);

    // console.log('counter before clicking:', counter);
    
    const button = screen.getByText('+');
    expect(button).toBeDefined();

    fireEvent.click(button);

    counter = parseInt(counterValue.innerHTML);

    // console.log('counter after clicking:', counter);

    expect(counter).toBeGreaterThan(0);
});

test('decrements', () => {
    render(<Counter />);

    const counterValue = screen.getByTestId('counter');
    expect(counterValue).toBeDefined();
    let counter = parseInt(counterValue.innerHTML);

    // console.log('counter before clicking:', counter);
    
    const button = screen.getByText('-');
    expect(button).toBeDefined();

    fireEvent.click(button);

    counter = parseInt(counterValue.innerHTML);

    // console.log('counter after clicking:', counter);

    expect(counter).toBeLessThan(0);
});