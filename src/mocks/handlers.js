// src/mocks/handlers.js
import { rest } from 'msw'

let flag = false;
export const handlers = [
  rest.post('/save_user', (req, res, ctx) => {
    if (!flag) {
      flag = true;
      setTimeout(() => {
        flag = false;
      }, 5e3);

      return res(ctx.status(200), ctx.json({ state: "success" }));
    } else {
      return res(ctx.status(429), ctx.json({ state: "error", error: "Api Rate Limit" }));
    }
  }),

  rest.get('/addresses', (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({
        old: {
          address: "Atelierstraße 29",
          postalCode: "81671",
          city: "München",
        },
        new: {
          address: "Sonnenstraße 15",
          postalCode: "80331",
          city: "München",
        },
      }));
  }),

  rest.get('/owners', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(["Florian Biller", "Sebastian Schlecht"]));
}),
]