import { Subjects } from './subjects';

export interface ImagePublishedEvent {
  subject: Subjects.ImagePublished;
  data: {
    id: string;
    version: number;
    published_status: number;
    published_url: string;
  };
}
