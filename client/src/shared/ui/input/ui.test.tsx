import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Input } from '.';

const onChange = jest.fn();

describe('Input component', () => {
  test('onChange works correctly', async () => {
    render(<Input value="some value" onChange={onChange} />);

    const inputElement = screen.getByRole('textbox');
    await userEvent.type(inputElement, 'React');

    expect(onChange).toHaveBeenCalledTimes(5);
  });
});
