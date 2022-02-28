import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { musicDataMock } from "./mock";

test("renders learn react link", () => {
  render(<App trackList={musicDataMock} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
