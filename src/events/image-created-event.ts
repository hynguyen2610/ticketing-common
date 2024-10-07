import { Subjects } from './subjects';

export interface ImageCreatedEvent {
  subject: Subjects.ImageCreated;
  data: {
    id: string;
    version: number;
    filename: string;
  };
}
