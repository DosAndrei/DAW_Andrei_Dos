import { Status } from "./category";

export interface Note {
  id: string;
  title: string;
  description: string;
  status: Status;
}
