import { RegisterDto } from './dto/register.dto';
import { getUsersCollection } from '../core/schemas/users.schema';
import * as bcrypt from 'bcryptjs';
import { User } from '../users/entities/user.entity';

export class AuthService {
  async register(dto: RegisterDto) {
    const usersCollection = await getUsersCollection();

    const existingUser = await usersCollection.findOne({ email: dto.email });
    if (existingUser) {
      throw new Error('El usuario ya existe');
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    const lastUser = await usersCollection.find().sort({ id: -1 }).limit(1).toArray();
    const nextId = lastUser.length > 0 ? lastUser[0].id + 1 : 1;

    const newUser: User = {
      id: nextId,
      name: dto.name,
      email: dto.email,
      password: hashedPassword,
      role: 'user',
    };

    await usersCollection.insertOne(newUser);

    return { message: 'Usuario registrado con éxito' };
  }
}
