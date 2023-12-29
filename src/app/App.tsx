import { WithRouter } from '@/app/providers';
import { Pages } from '@/pages';

export const App = (): JSX.Element => (
  <WithRouter>
    <Pages />
  </WithRouter>
);
