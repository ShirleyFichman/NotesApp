import Form from "../components/Form";
import Navbar from "../components/NavBar";

function Login() {
    return <>
    <Navbar />
    <div className="flex justify-center min-h-screen items-center">
        <Form route="/api/token/" method="login" />
    </div>
    </>
}

export default Login