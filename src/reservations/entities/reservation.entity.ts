// src/reservations/entities/reservation.entity.ts

export interface Reservation {
    id: number;
    room: string;
    guestName: string;
    checkIn: string; 
    checkOut: string;
    status: string;
    userId: number;
  }
  