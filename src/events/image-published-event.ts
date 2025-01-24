import { BaseEvent } from './base-event';
import { Subjects } from './subjects';
import { ImageStatus } from './types/image-status';

export interface ImagePublishedEvent extends BaseEvent {
  subject: Subjects.ImagePublished;
  data: {
    id: string;
    version: number;
    ticketId: string;
    publishedStatus: ImageStatus;
    publishedUrl: string;
    filename: string;
  };
}
