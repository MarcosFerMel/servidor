import { Room } from "../../rooms/entities/room.entity";
import { connectToDatabase } from "../database";

const getRoomsCollection = async () => {
    const db = await connectToDatabase();
    return db.collection<Room>("rooms");
};

export { getRoomsCollection };