import { setupServer } from "msw/node";
import { rest } from "msw";
import { createFakeUser } from "./fakes";
import { User } from "../src/modules/users.model";

export const handlers = [
  rest.get(`https://reqres.in/api/users`, (req, res, ctx) => {
    const page = Number(req.url.searchParams.get("page")) || 1;

    if (page === 3) {
      return res(
        ctx.json({
          data: [],
        })
      );
    }

    const userData: User[] = [];

    // Create 5 users for the current page
    for (let i = 0; i < 5; i++) {
      userData.push(
        createFakeUser({
          id: page * 5 + i,
          first_name: `User ${page * 5 + i}`,
        })
      );
    }

    return res(
      ctx.json({
        data: userData,
      })
    );
  }),
];

export const server = setupServer(...handlers);
