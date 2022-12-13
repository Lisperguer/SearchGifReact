import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("GifExpertApp()", () => {
  test("should add a new category if it not exits", () => {
    render(<GifExpertApp />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: "disney" } });
    fireEvent.submit(form);

    expect(screen.getAllByRole("heading", { level: 3 }).length).toBe(2);
  });

  test("should not add a new category when it exits", () => {
    render(<GifExpertApp />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: "hola" } });
    fireEvent.submit(form);

    expect(screen.getAllByRole("heading", { level: 3 }).length).toBe(1);
  });
});
