import React from "react";
import "@testing-library/jest-dom";
import { describe, it, expect, vi } from "vitest";
import Home from "../pages/index";
import {
  fireEvent,
  getByText,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { handlers } from "../../mocks/index";
import Board from "../components/Board";
import { Sign } from "../utils/constants";

vi.mock("next/router", () => {
  const useRouter = vi.fn(() => ({ query: { id: "1" } }));

  return { useRouter };
});

const server = setupServer(...handlers);
// establish API mocking before all tests
beforeAll(() => server.listen());
// reset any request handlers that are declared as a part of our tests
// (i.e. for testing one-time error scenarios)
afterEach(() => server.resetHandlers());
// clean up once the tests are done
afterAll(() => server.close());

describe("Board component", () => {
  it("should call onMove with updated moves array when a cell is clicked", async () => {
    const moves = ["", "", "", "", "", "", "", "", ""];
    const onMove = vi.fn();
    const { getByTestId } = render(<Board onMove={onMove} moves={moves} />);

    const cell0 = getByTestId("cell-0");
    fireEvent.click(cell0);
    expect(onMove).toHaveBeenCalledWith(["X", "", "", "", "", "", "", "", ""]);

    const cell1 = getByTestId("cell-1");
    fireEvent.click(cell1);
    expect(onMove).toHaveBeenCalledWith(["", "O", "", "", "", "", "", "", ""]);
  });
});
