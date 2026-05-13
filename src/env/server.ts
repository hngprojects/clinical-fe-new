export const env = {
  API_BASE_URL: process.env.API_BASE_URL ?? "",
  API_SECRET: process.env.API_SECRET ?? "",
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME ?? "Next Starter",
} as const;
