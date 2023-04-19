import { faker } from "@faker-js/faker";
import { User } from "../../src/modules/users.model";

export const createFakeUser = (overrides?: Partial<User>): User => ({
  avatar: faker.internet.avatar(),
  email: faker.internet.email(),
  first_name: faker.name.firstName(),
  id: faker.datatype.number(),
  last_name: faker.name.lastName(),
  ...(overrides ?? {}),
});
