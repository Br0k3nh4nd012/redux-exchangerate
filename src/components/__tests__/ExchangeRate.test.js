import { render, screen } from "../../test-utils";
import { ExchangeRate } from "../ExchangeRate";
import { Provider } from 'react-redux';
import { Store } from '../../store/Store';

test("renders title", () => {
  render(<ExchangeRate />);
  const linkElement = screen.getByText(/exchange rates/i);
  expect(linkElement).toBeInTheDocument();
});
