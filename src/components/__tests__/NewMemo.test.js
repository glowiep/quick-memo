import React from "react";

import { render, cleanup } from "@testing-library/react"

import NewMemo from "../NewMemo";

afterEach(cleanup);

it ("renders without crashing", () => {
  render(<NewMemo />);
});