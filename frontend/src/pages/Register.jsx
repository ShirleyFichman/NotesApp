import Form from "../components/Form"
import Navbar from "../components/NavBar"

function Register() {
    return <>
    <Navbar />
    <div className="flex justify-center min-h-screen items-center">
        <Form route="/api/user/register/" method="register" />
    </div>
    </>
}

export default Register