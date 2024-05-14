import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('contator deve ser igual a zero ao carregar a página', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('current-count')).toHaveTextContent(0)
});

test('contator deve ser igual a um após clicar no botão Incrementar Contador', () => {
  const { getByTestId } = render(<App />);

  fireEvent.click(getByTestId('button-increment-counter'))
  
  expect(getByTestId('current-count')).toHaveTextContent(1)
});
