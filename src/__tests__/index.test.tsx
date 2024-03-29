import React from "react";
import "@testing-library/jest-dom";
import { describe, it, expect, vi } from "vitest";
import Home from "../pages/index";
import { fireEvent, getByText, render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { handlers } from "../../mocks/index"
// Good starting point: https://testing-library.com/docs/react-testing-library/example-intro

// TODO setup your mock api here (from the mocks folder)
// Feel free to add more files to test various other components


const server = setupServer(...handlers)

  vi.mock("next/router", () => {
    const useRouter = vi.fn(() => ({ query: {id: "1"}  }));

    return {useRouter}
  })


  // establish API mocking before all tests
  beforeAll(() => server.listen())
  // reset any request handlers that are declared as a part of our tests
  // (i.e. for testing one-time error scenarios)
  afterEach(() => server.resetHandlers())
  // clean up once the tests are done
  afterAll(() => server.close())

describe("Home screen", () => {
  // TODO Add your react-testing-library tests here
  it("Enter name of players", async () => {
    render(<Home />);

    const user1_input = await screen.findByTestId("playerName")
    const user2_input = await screen.findByTestId("playerName2")

    expect(user1_input).not.toBeInTheDocument;

    fireEvent.change(user1_input, {target: {value: 'Bubbi'}});

    expect(user1_input.value).toBe('Bubbi');
    expect(user2_input).not.toBeInTheDocument;

    fireEvent.change(user2_input, {target: {value: 'Byggir'}});
    
    expect(user2_input.value).toBe('Byggir');

  });
});
