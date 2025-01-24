import { Subjects } from './subjects';

export interface OrderCancelledEvent {
  subject: Subjects.OrderCancelled;
  data: {
    id: string;
    version: number;
    ticket: {
      id: string;
    };
    traceId?: string;
    spanId?: string;
    traceHeaders?: Record<string, string>;
  };
}
