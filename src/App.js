import { useEffect } from "react";
import { gapi } from "gapi-script";
import { data } from "./Data";
import { Login } from "./Components/Login";
import { Logout } from "./Components/Logout";

function App() {
  useEffect(() => {
    function initial() {
      gapi.client.init({
        clientId: data.client_id,
        scope: "",
      });
    }
    gapi.load("client:auth2", initial);
  }, []);

  return (
    <div className="App">
      <Login />
      <Logout />
    </div>
  );
}

export default App;
