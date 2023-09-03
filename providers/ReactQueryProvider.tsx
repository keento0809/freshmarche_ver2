import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient({});

export const ReactQueryProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};
