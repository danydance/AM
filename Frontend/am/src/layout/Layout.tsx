import { Outlet } from "react-router-dom";
import classNames from "classnames";
import "./main.css"; // ✅ your custom layout styles

type LayoutProps = {
  isSidebarCollapsed: boolean;
  screenWidth: number;
};

const Layout = ({ isSidebarCollapsed, screenWidth }: LayoutProps) => {
  const classes = classNames({
    body: true,
    "body-trimmed": !isSidebarCollapsed && screenWidth > 768,
  });
  return (
    <div className={classes}>
      <Outlet />
    </div>
  );
};

export default Layout
