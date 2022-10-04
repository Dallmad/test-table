import React, { FC } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { ReturnComponentType } from 'common';
import { PATH } from 'enums';
import { Error404, Table } from 'features';

export const AppRoutes: FC = (): ReturnComponentType => {
  return (
    <div>
      <Routes>
        <Route path={PATH.MAIN} element={<Table />} />
        <Route path={PATH.ERROR404} element={<Error404 />} />
        <Route path={PATH.ANOTHER} element={<Navigate to={PATH.ERROR404} />} />
      </Routes>
    </div>
  );
};
