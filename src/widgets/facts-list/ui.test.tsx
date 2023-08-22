import { fireEvent, render, screen } from '@testing-library/react';

import { threeFacts, sixFacts } from './config';
import { FactsList } from '.';

describe('FactsList component', () => {
  test('renders facts correctly', () => {
    render(<FactsList facts={threeFacts} />);

    const factItems = screen.getAllByRole('listitem');
    expect(factItems).toHaveLength(3);
  });

  test('shows only cropped facts initially', () => {
    render(<FactsList facts={sixFacts} />);

    const factItems = screen.getAllByRole('listitem');
    expect(factItems).toHaveLength(5);
  });

  test('expands facts when "Показать еще" button is clicked', () => {
    render(<FactsList facts={sixFacts} />);

    const expandButton = screen.getByRole('button', { name: 'Показать еще' });
    fireEvent.click(expandButton);

    const factItems = screen.getAllByRole('listitem');
    expect(factItems).toHaveLength(6);

    const hideButton = screen.getByRole('button', { name: 'Скрыть' });
    // @ts-expect-error
    expect(hideButton).toBeInTheDocument();
  });

  test("hides facts when 'Скрыть' button is clicked", () => {
    render(<FactsList facts={sixFacts} />);

    const expandButton = screen.getByRole('button', { name: 'Показать еще' });
    fireEvent.click(expandButton);

    const hideButton = screen.getByRole('button', { name: 'Скрыть' });
    fireEvent.click(hideButton);

    const factItems = screen.getAllByRole('listitem');
    expect(factItems).toHaveLength(5);

    const showButton = screen.getByRole('button', { name: 'Показать еще' });
    // @ts-expect-error
    expect(showButton).toBeInTheDocument();
  });
});
