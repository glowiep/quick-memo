import React from "react";

import { render, cleanup } from "@testing-library/react"

import AddMemoButton from "../AddMemoButton";

afterEach(cleanup);

it ("renders without crashing", () => {
  render(<AddMemoButton />);
});