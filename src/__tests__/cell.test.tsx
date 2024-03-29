import React from "react";
import "@testing-library/jest-dom";
import { describe, it, expect, vi } from "vitest";
import Home from "../pages/index";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import Cell from "../components/Cell";
import { setupServer } from "msw/node";
import { handlers } from "../../mocks/index";
import { Sign } from "../utils/constants";
// Good starting point: https://testing-library.com/docs/react-testing-library/example-intro

// TODO setup your mock api here (from the mocks folder)
// Feel free to add more files to test various other components

/*
⭕️❌
*/

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

describe("Cell component", () => {
  it("should render an ❌", () => {
    const { getByText } = render(
      <Cell onClick={() => {}} number={1} value={Sign.X} readOnly={false} />,
    );
    expect(getByText("❌")).toBeInTheDocument();
  });
});
