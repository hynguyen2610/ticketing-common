import { BaseEvent } from './base-event';
import { Subjects } from './subjects';

export interface TicketCreatedEvent extends BaseEvent {
  subject: Subjects.TicketCreated;
  data: {
    id: string;
    version: number;
    title: string;
    price: number;
    userId: string;
    images: string[];
    traceId?: string;
    spanId?: string;
  };
}
