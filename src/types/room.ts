export interface Room {
  _id: number;
  name: string;
  images: string[];
  capacity: number;
  pricePerSlot: number;
}

export type TRoom = {
  name: string;
  roomNo: number;
  floorNo: number;
  capacity: number;
  pricePerSlot: number;
  amenities: string[];
  images: string[];
  isDeleted: boolean;
};
