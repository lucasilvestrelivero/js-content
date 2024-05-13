import { APIGatewayProxyResultV2 } from 'aws-lambda';

export function response(statusCode: number, body?: Record<string, any>): APIGatewayProxyResultV2 {
  return {
    statusCode,
    body: JSON.stringify(body),
  };
}
