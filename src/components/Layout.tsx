import React from 'react';
import Header from '@/components/Header';
import GlobalStyles from '@/styles/Global';
import Main from '@/components/Main';

interface LayoutProps {
  children?: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Main>{children}</Main>
    </>
  );
};

export default Layout;
