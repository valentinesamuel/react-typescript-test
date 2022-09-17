import { useApi } from "../component/useApi";
import { renderHook } from "@testing-library/react";
import { rest } from "msw"
import { setupServer } from "msw/node"


const server = setupServer(
    rest.get("/api", (req, res, ctx) => {
        return res(ctx.json({
            name: "Jack"
        }))
    })
)

beforeAll(() => {
    server.listen()
})
afterEach(() => {
    server.resetHandlers()
})
afterAll(() => {
    server.close()
})

test("should increment", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useApi())
    await waitForNextUpdate()
    expect(result.current).toEqual({name:"Jack"})
})