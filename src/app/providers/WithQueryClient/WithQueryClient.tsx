import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { IWithQueryClientProvider } from './WithQueryClient.h';

const queryClient = new QueryClient();

export const WithQueryClient = ({
  children,
}: IWithQueryClientProvider): JSX.Element => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
