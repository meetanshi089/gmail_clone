import "./App.css";
import React, { useState } from "react";
import Header from "./components/layouts/Header";
import Main from "./components/layouts/Main";
function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const toggleSidebar = () => {
    setSidebarCollapsed(sidebarCollapsed);
  };
  return (
    <div className="App">
      <Header onMenuClick={toggleSidebar} collapsed={sidebarCollapsed} />
      <Main />
    </div>
  );
}

export default App;
