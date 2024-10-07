import { Subjects } from './subjects';

export interface ImageDeletedEvent {
  subject: Subjects.ImageDeleted;
  data: {
    id: string;
    version: number;
    filename: string;
  };
}
