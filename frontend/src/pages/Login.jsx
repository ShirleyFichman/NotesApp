import Form from "../components/Form";
import Navbar from "../components/NavBar";

function Login() {
    return <>
    <Navbar />
    <Form route="/api/token/" method="login" />
    </>
}

export default Login