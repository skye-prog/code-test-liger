import { render, screen } from "@testing-library/react";

import ScoreList from "./components/ScoreList";
describe("ScoreList componengt", () => {
  test("render SYDNEY", () => {
    render(<ScoreList />);
    const linkElement = screen.getByText("SYDNEY SHARKS");
    expect(linkElement).toBeInTheDocument();
  });
});
