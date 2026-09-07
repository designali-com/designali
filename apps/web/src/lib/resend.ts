import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY as string);

let client: Resend | null = null;

export function getResend(): Resend {
    if (client) {
      return client;
    }
  
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error("RESEND_API_KEY is not set, so email cannot be sent.");
    }
  
    client = new Resend(apiKey);
    return client;
  }