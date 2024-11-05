export type TSlot = {
  id: string;
  room: string;
  date: string;
  startTime: string;
  endTime: string;
  isBooked: boolean;
  userId?: string;
  createdAt: Date;
  updatedAt: Date;
};
