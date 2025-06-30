
import React from 'react';
import { useScrollTo } from './hooks/useScrollTo';

const Layout = ({ children }) => {
  useScrollTo();
  return <>{children}</>;
};

export default Layout;