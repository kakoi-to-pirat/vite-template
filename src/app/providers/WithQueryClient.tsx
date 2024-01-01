import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

interface IWithQueryClientProvider {
  children: React.ReactNode;
}

export const WithQueryClient = ({
  children,
}: IWithQueryClientProvider): JSX.Element => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
