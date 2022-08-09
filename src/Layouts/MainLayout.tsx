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
      <main className="max-w-screen-2xl mx-auto flex flex-col px-10 pt-1 pb-10">{children}</main>
    </>
  );
}
