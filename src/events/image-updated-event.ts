import { Subjects } from './subjects';

export interface ImageUpdatedEvent {
  subject: Subjects.ImageUpdated;
  data: {
    id: string;
    version: number;
    published_status: number;
    published_url: string;
  };
}
