import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { Room } from './entities/room.entity';
import { getRoomsCollection } from 'src/core/schemas/rooms.schema';

@Injectable()
export class RoomsService {
  create(createRoomDto: CreateRoomDto) {
    return 'This action adds a new room';
  }

  async findAll(): Promise<{ ok: boolean, rooms: Room[] }> {
    try {
      const rooms = await getRoomsCollection();
      const result = await rooms.find().toArray();
      return { ok: true, rooms: result };
    } catch (error) {
      return { ok: false, rooms: [] };
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} room`;
  }

  update(id: number, updateRoomDto: UpdateRoomDto) {
    return `This action updates a #${id} room`;
  }

  remove(id: number) {
    return `This action removes a #${id} room`;
  }
}
