import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("useFetchGifs()", () => {
  test("should return the initial useState", () => {
    const { result } = renderHook(() => useFetchGifs("Hola"));
    expect(result.current.images.length).toBe(0);
    expect(result.current.isLoading).toBe(true);
  });

  test("should return an array of images and isLoading is false", async () => {
    const { result } = renderHook(() => useFetchGifs("Hola"));
    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );

    expect(result.current.images.length).toBeGreaterThan(0);
    expect(result.current.isLoading).toBe(false);
  });
});
