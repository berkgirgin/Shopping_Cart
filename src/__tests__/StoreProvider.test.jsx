import { describe, expect } from "vitest";
import { render, screen, renderHook, act } from "@testing-library/react";
import { StoreProvider, useStore } from "../context/StoreProvider";

describe("StoreProvider", () => {
  test("fetches allProductsList correctly", () => {
    const { result } = renderHook(() => useStore(), {
      wrapper: StoreProvider,
    });

    expect(result.current.allProductsList).toMatchSnapshot();
  });

  test("renders children correctly", () => {});

  test("currentCart initialises correctly", () => {});

  test("currentCart initialises correctly", () => {});

  test("getTotalItemCount runs correctly", () => {});
});
