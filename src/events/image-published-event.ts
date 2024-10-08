import { Subjects } from './subjects';

export interface ImagePublishedEvent {
  subject: Subjects.ImagePublished;
  data: {
    id: string;
    version: number;
    ticketId: string;
    published_status: number;
    published_url: string;
  };
}
