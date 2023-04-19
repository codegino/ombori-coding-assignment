import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { server } from '../test/server';

jest.mock('./utils/delay', () => ({
  delay: () => Promise.resolve(),
}));

jest.mock('./utils/debounce', () => ({
  debounce: (fn: () => void) => fn,
}));

beforeAll(() => server.listen());
afterAll(() => server.close());
beforeEach(() => server.resetHandlers());

test('Show and hide loading indicator', async () => {
  render(<App />);

  expect(screen.getByRole('alert', { busy: true })).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText('Users')).toBeInTheDocument();
  });

  fireEvent.scroll(screen.getByRole('main'), { target: { scrollY: 1000 } });

  expect(screen.getAllByRole('article')).toHaveLength(5);
  expect(screen.queryByRole('alert', { busy: true })).not.toBeInTheDocument();
});

test('Fetch more users', async () => {
  render(<App />);

  await waitFor(() => {
    expect(screen.getByText('Users')).toBeInTheDocument();
  });

  expect(screen.getAllByRole('article')).toHaveLength(5);

  fireEvent.scroll(screen.getByTestId('users-list'), {
    target: { scrollY: 2000 },
  });

  await waitFor(() => {
    expect(screen.getAllByRole('article')).toHaveLength(10);
  });

  fireEvent.scroll(screen.getByTestId('users-list'), {
    target: { scrollY: 4000 },
  });

  await waitFor(() => {
    expect(screen.getByText('No more users to fetch')).toBeInTheDocument();
  });
});
