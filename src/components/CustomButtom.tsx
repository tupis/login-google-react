import { useGoogleLogin } from '@react-oauth/google';
import loginGoogle from '../services/loginGoogle';

const CustomButtom = (props: any) => {
    const { setToken } = props

    const login = useGoogleLogin({
        onSuccess: async (response) => {
            const getUserInfo = await loginGoogle.get('', {
                headers: { Authorization: `Bearer ${response.access_token}`}
            }).then(res => setToken(res.data))
        }
    })


    return <button onClick={() => login()}>Logar com o Google</button>
}

export default CustomButtom;