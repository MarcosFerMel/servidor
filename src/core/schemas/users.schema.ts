// src/core/schemas/users.schema.ts
import { User } from "../../users/entities/user.entity";
import { connectToDatabase } from "../database";

const getUsersCollection = async () => {
  const db = await connectToDatabase();
  return db.collection<User>("users");
};

export { getUsersCollection };
