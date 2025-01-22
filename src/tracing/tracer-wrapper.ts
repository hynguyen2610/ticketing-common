import { NodeTracerProvider, SimpleSpanProcessor } from '@opentelemetry/sdk-trace-node';
import { JaegerExporter } from '@opentelemetry/exporter-jaeger';
import { trace, Tracer } from '@opentelemetry/api';
import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
import { Resource } from '@opentelemetry/resources';

export class TracerWrapper {
  private provider: NodeTracerProvider;

  constructor(private serviceName: string) {
    // Create an OTLP exporter (gRPC or HTTP)
    const exporter = new JaegerExporter({
      endpoint: 'http://jaeger-collector.default.svc.cluster.local:14268/api/traces',
    });

    // Set up the Tracer provider with service name attribute
    this.provider = new NodeTracerProvider({
      resource: new Resource({
        'service.name': this.serviceName, // Set the service name
      }),
    });
    // Add the OTLP exporter to the Span Processor
    this.provider.addSpanProcessor(new SimpleSpanProcessor(exporter));

    // Register the Tracer provider globally
    this.provider.register();

    // Optionally, enable HTTP instrumentation (for outgoing HTTP requests)
    new HttpInstrumentation().enable();
  }

  getTracer(): Tracer {
    // Export the tracer instance
    return trace.getTracer(this.serviceName);
  }
}

