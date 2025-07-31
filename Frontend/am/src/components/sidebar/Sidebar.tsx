import { Link } from "react-router-dom";
import "./css-sidebar.css"
import classNames from "classnames";
import { Fragment } from "react/jsx-runtime";
import '@fortawesome/fontawesome-free/css/all.min.css';

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
      icon: "fas fa-home",
      label: "Home",
    },
    {
      routerLink: "it-people",
      icon: "fas fa-box-open",
      label: "AM",
    },
    {
      routerLink: "buildings",
      icon: "fas fa-file",
      label: "buildings",
    },
    {
      routerLink: "resources",
      icon: "fas fa-cog",
      label: "Resource",
    },
    {
      routerLink: "request-am",
      icon: "fas fa-cog",
      label: "requests",
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
          <i className="fas fa-bars"></i>
        </button>
        {!isSidebarCollapsed && (
          <Fragment>
            <div className="logo-text">App</div>
            <button className="btn-close" onClick={closeSidenav}></button>
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