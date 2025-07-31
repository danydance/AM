import { Link } from "react-router-dom";
import "./css-sidebar.css"
import classNames from "classnames";
import { Fragment } from "react/jsx-runtime";

type SidebarProps = {
  isSidebarCollapsed: boolean;
  changeIsSidebarCollapsed: (isSidebarCollapsed: boolean) => void;
};

const Sidebar = ({
  isSidebarCollapsed,
  changeIsSidebarCollapsed,
}: SidebarProps) => {
  const items = [
    {
      routerLink: "",
      icon: "fal fa-home",
      label: "Dashboard",
    },
    {
      routerLink: "it-people",
      icon: "fal fa-box-open",
      label: "אחראי מחשוב",
    },
    {
      routerLink: "buildings",
      icon: "fal fa-file",
      label: "buildings",
    },
    {
      routerLink: "resources",
      icon: "fal fa-cog",
      label: "Resources",
    },
  ];
  const sidebarClasses = classNames({
    sidenav: true,
    "sidenav-collapsed": isSidebarCollapsed,
  });

  const closeSidenav = () => {
    changeIsSidebarCollapsed(true);
  };

  const toggleCollapse = (): void => {
    changeIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className={sidebarClasses}>
      <div className="logo-container">
        <button className="logo" onClick={toggleCollapse}>
          <i className="fal fa-bars"></i>
        </button>
        {!isSidebarCollapsed && (
          <Fragment>
            <div className="logo-text">App</div>
            <button className="btn-close" onClick={closeSidenav}>
              <i className="fal fa-times close-icon"></i>
            </button>
          </Fragment>
        )}
      </div>
      <div className="sidenav-nav">
        {items.map((item) => (
          <li key={item.label} className="sidenav-nav-item">
            <Link className="sidenav-nav-link" to={item.routerLink}>
              <i
                className={classNames({
                  "sidenav-link-icon": true,
                  [item.icon]: true,
                })}
              ></i>
              {!isSidebarCollapsed && (
                <span className="sidenav-link-text">{item.label}</span>
              )}
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;