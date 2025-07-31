import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import classNames from "classnames";
import "./main.css"; // ✅ your custom layout styles

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
  const classes = classNames({
    body: true,
    "body-trimmed": !isSidebarCollapsed && screenWidth > 768,
  });

  return (
    <>
      <Sidebar
        isSidebarCollapsed={isSidebarCollapsed}
        changeIsSidebarCollapsed={changeIsSidebarCollapsed}
      />
      <div className="body">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
