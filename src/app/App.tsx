import React, { FC } from 'react';

import { AppRoutes } from 'app/Routes/AppRoutes';
import { ReturnComponentType } from 'common';
import { Header } from 'features';

export const App: FC = (): ReturnComponentType => {
  return (
    <div>
      <Header />
      <AppRoutes />
    </div>
  );
};
