import { Subjects } from './subjects';

export interface ExpirationCompleteEvent {
  subject: Subjects.ExpirationComplete;
  data: {
    orderId: string;
    traceId?: string;
    spanId?: string;
    traceHeaders?: Record<string, string>;
  };
}
