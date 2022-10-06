import { useGoogleLogin } from "@react-oauth/google";
import { LoginGoogle } from "../services/GoogleServices";

const CustomButtom = (props: any) => {
  const { setToken } = props;

  const login = useGoogleLogin({
    onSuccess: async (response) => setToken(await LoginGoogle(response)),
  });

  return <button onClick={(): void => login()}>Continue com o Google</button>;
};

export default CustomButtom;
