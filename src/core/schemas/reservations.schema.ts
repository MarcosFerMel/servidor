// src/core/schemas/reservations.schema.ts

import { Reservation } from "../../reservations/entities/reservation.entity";
import { connectToDatabase } from "../database";

const getReservationsCollection = async () => {
  const db = await connectToDatabase();
  return db.collection<Reservation>("reservations");
};

export { getReservationsCollection };
