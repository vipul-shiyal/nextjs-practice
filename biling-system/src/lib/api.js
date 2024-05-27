"use server";

import { getUsers } from "./bills";

export async function customersList() {
  const users = await getUsers();
  return users;
}
