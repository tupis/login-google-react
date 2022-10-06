import "../../sass/form.scss";
import { useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import CustomButtom from "../../components/CustomButtomGoogle";
import { Link } from "react-router-dom";

const Login = () => {
  const [token, setToken] = useState();
  const clientId = import.meta.env.VITE_CLIENT_ID_GOOGLE;
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className="form-area">
      <GoogleOAuthProvider clientId={clientId}>
        <CustomButtom setToken={setToken} />
      </GoogleOAuthProvider>

      <p>
        <span></span> OU <span></span>
      </p>

      <form action="/" method="post">
        <h1>Login</h1>
        <label>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e): void => setEmail(e.target.value)}
          />
        </label>

        <label>
          <input
            type="text"
            placeholder="Senha"
            value={password}
            onChange={(e): void => setPassword(e.target.value)}
          />
        </label>
        <p className="alternate">
          Ainda não tem conta? <Link to="/register">Registre-se</Link>
        </p>
        <button type="submit">Fazer login</button>
      </form>
    </div>
  );
};

export default Login;
