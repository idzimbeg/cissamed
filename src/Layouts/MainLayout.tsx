import { Outlet } from 'react-router-dom';

import { Navbar } from '../Navbar';

export type MainLayoutProps = {
  children?: React.ReactNode;
  handleOnClick?: (e: unknown) => void;
};

export function MainLayout({ children = <Outlet /> }: MainLayoutProps) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
