import { Subjects } from './subjects';

export interface ImageUpdatedEvent {
  subject: Subjects.ImageUpdated;
  data: {
    id: string;
    version: number;
    ticketId: string;
    published_status: number;
    published_url: string;
    traceHeaders: Record<string, string>;
  };
}
