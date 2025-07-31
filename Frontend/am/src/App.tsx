import { useEffect, useState } from "react";
import Layout from "./layout/Layout";
import Sidebar from "./components/sidebar/Sidebar"
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ITPeople from "./pages/ITPeople";
import Buildings from "./pages/Buildings";
import Resources from "./pages/Resources";
import RequestAM from "./pages/RequestAM"

const App = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateSize = () => {
      setScreenWidth(window.innerWidth);
      if (window.innerWidth < 768) {
        setIsSidebarCollapsed(true);
      }
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <BrowserRouter>
      <Sidebar
        isSidebarCollapsed={isSidebarCollapsed}
        changeIsSidebarCollapsed={(value) =>
          setIsSidebarCollapsed(value)
        }
      />
      <Routes>
        <Route
          element={
            <Layout
              screenWidth={screenWidth}
              isSidebarCollapsed={isSidebarCollapsed}
            />
          }
        >
          <Route index element={<h1>Welcome to AM</h1>} />
          <Route path="/it-people" element={<ITPeople />} />
          <Route path="/buildings" element={<Buildings />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/request-am" element={<RequestAM />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
