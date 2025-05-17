// src/users/entities/user.entity.ts
export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: 'user' | 'admin';
}
