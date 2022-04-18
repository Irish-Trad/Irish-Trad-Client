import { render } from "@testing-library/react";
import Homepage from "pages/index";

describe("Home", () => {
  it("renders a heading", () => {
    const { getAllByText } = render(<Homepage />);

    expect(getAllByText("Irish-Trad.net")).toHaveLength(3);
  });
});
