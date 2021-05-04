import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

test('renders posts page', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <App />
    </Provider>,
  );

  const rootElement = getByTestId('posts');
  expect(rootElement).toBeInTheDocument();
});
