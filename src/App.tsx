import { useEffect, useState } from "react";
import "./App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import CustomButtom from "./components/CustomButtom";

interface userInfo {
  email: "string";
  name: "string";
  given_name: "string";
  picture: "string";
}

function App() {
  const [token, setToken] = useState<userInfo>();

  const clientId = import.meta.env.VITE_CLIENT_ID_GOOGLE;

  useEffect(() => {
    console.log(token);
  }, [token]);

  return (
    <div className="App">
      <GoogleOAuthProvider clientId={clientId}>
        <CustomButtom setToken={setToken} />
      </GoogleOAuthProvider>
      {token && (
        <>
          <h2>Nome: {token.name}</h2>
          <h3>Email: {token.email}</h3>
        </>
      )}
    </div>
  );
}

export default App;
