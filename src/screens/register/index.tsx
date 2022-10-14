import "../../sass/form.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { login, register } from "../../services/UsersServices";

const Register = () => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleRegister: (e: any) => Promise<void> = async (e) => {
    e.preventDefault();
    const params = {
      name,
      email,
      password,
    };
    await register(params);
  };

  return (
    <div className="form-area">
      <form method="post">
        <h1>Registrar-se</h1>
        <label>
          <input
            type="text"
            placeholder="Nome Completo"
            value={name}
            onChange={(e): void => setName(e.target.value)}
          />
        </label>

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
          Já tem conta? <Link to="/">Logar</Link>
        </p>
        <button type="submit" onClick={handleRegister}>
          Registrar-se
        </button>
      </form>
    </div>
  );
};

export default Register;
