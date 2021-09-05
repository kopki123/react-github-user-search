// import axios from "axios";
import Search from "./components/Search";
import List from "./components/List";
import { useState } from "react";

function App() {
  const [userData, setUserData] = useState([]);
  const [appStatus, setAppStatus] = useState({
    isFirst: true,
    isLoading: false,
    isError: false,
  });

  return (
    <div className="container">
      <Search setUserData={setUserData} setAppStatus={setAppStatus} />
      <List userData={userData} appStatus={appStatus} />
    </div>
  );
}

export default App;
