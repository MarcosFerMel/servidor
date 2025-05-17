import * as bcrypt from "bcryptjs";
import { getUsersCollection } from "../core/schemas/users.schema";

async function seedUsers() {
  const users = [
    {
      id: 1,
      name: "Juan Pérez",
      email: "juan.perez@example.com",
      password: bcrypt.hashSync("juan123", 10),
      role: "user" as "user",
    },
    {
      id: 2,
      name: "María Gómez",
      email: "maria.gomez@example.com",
      password: bcrypt.hashSync("maria123", 10),
      role: "user" as "user",
    },
    {
      id: 3,
      name: "Paco Gómez",
      email: "paco.gomez@example.com",
      password: bcrypt.hashSync("paco123", 10),
      role: "user" as "user",
    },
    {
      id: 4,
      name: "Sara Fernández",
      email: "sara.fernandez@example.com",
      password: bcrypt.hashSync("sara123", 10),
      role: "admin" as "admin",
    },
  ];

  const usersCollection = await getUsersCollection();

  for (const user of users) {
    const exists = await usersCollection.findOne({ email: user.email });
    if (!exists) {
      await usersCollection.insertOne(user); // ✅ Usamos directamente user
      console.log(`✅ Usuario insertado: ${user.email}`);
    } else {
      console.log(`⚠️ Usuario ya existe: ${user.email}`);
    }
  }

  process.exit();
}

seedUsers().catch((err) => {
  console.error("❌ Error al insertar usuarios:", err);
  process.exit(1);
});
