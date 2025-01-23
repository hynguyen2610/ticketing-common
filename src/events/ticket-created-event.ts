import { Subjects } from './subjects';
import { Context } from '@opentelemetry/api';

export interface TicketCreatedEvent {
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
    traceHeaders: Record<string, string>;
  };
}
