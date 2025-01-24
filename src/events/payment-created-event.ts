import { Subjects } from './subjects';

export interface PaymentCreatedEvent {
  subject: Subjects.PaymentCreated;
  data: {
    id: string;
    orderId: string;
    stripeId: string;
  };
  traceId?: string;
  spanId?: string;
  traceHeaders?: Record<string, string>;
}
