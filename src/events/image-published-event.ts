import { Subjects } from './subjects';
import { ImageStatus } from './types/image-status';

export interface ImagePublishedEvent {
  subject: Subjects.ImagePublished;
  data: {
    id: string;
    version: number;
    ticketId: string;
    publishedStatus: ImageStatus;
    publishedUrl: string;
    filename: string;
    traceHeaders?: Record<string, string>;
  };
}
