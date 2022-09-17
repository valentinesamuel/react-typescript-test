import { useCounter } from "../component/useCounter";
import { renderHook, act } from "@testing-library/react";

test("should increment", () => {
    const { result } = renderHook(() => useCounter())
    act(() => {
        result.current.increment()
    })
    expect(result.current.count).toBe(1)
})