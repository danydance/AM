import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";

type LayoutProps = {
  screenWidth: number;
  isSidebarCollapsed: boolean;
  changeIsSidebarCollapsed: (val: boolean) => void;
};

const Layout = ({
  screenWidth,
  isSidebarCollapsed,
  changeIsSidebarCollapsed,
}: LayoutProps) => {
  return (
    <>
      <Sidebar
        isSidebarCollapsed={isSidebarCollapsed}
        changeIsSidebarCollapsed={changeIsSidebarCollapsed}
      />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
