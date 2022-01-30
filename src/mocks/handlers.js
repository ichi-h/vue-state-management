import { rest } from "msw";

const sleep = (ms) => {
  return new Promise((resolve) =>
    setTimeout(() => resolve(), ms, false)
  );
};

export const handlers = [
  rest.get("/api/fetch_count", async (_, res, ctx) => {
    await sleep(500);
    return res(ctx.status(200), ctx.json({ count: 0 }));
  }),
  rest.patch("/api/patch_count", async (_, res, ctx) => {
    await sleep(500);
    return res(ctx.status(200));
  }),
];
