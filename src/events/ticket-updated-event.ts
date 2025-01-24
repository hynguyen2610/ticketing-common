import { Subjects } from './subjects';

export interface TicketUpdatedEvent {
  subject: Subjects.TicketUpdated;
  data: {
    id: string;
    version: number;
    title: string;
    price: number;
    userId: string;
    orderId?: string;
    images?: string[];
    traceId?: string;
    spanId?: string;
    traceHeaders?: Record<string, string>;
  };
}
