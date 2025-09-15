import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Page from "../page";

describe("Page", () => {
  it("should render the text `Get started by editing`", () => {
    render(<Page />);
    expect(screen.getByText(/^Get started by editing/)).toBeDefined();
  });
});
