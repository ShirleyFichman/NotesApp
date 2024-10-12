import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import LoadingIndicator from "./LoadingIndicator";

function Form({ route, method }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const name = method === "login" ? "Log In" : "Register";

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        try {
            const res = await api.post(route, { username, password })
            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate("/")
            } else {
                navigate("/login")
            }
        } catch (error) {
            alert(error)
        } finally {
            setLoading(false)
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4 bg-gray-50 w-96 h-80 ring-1 ring-gray-100 rounded-lg">
            <h1 className="font-bold text-lg">{name}</h1>
            <label className="text-xs">Your username:</label>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-white w-72 ring-1 ring-gray-100 h-9"
            />
            <label className="text-xs">Your password:</label>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white w-72 ring-1 ring-gray-100 h-9"
            />
            {loading && <LoadingIndicator />}
            <div className="flex justify-center mt-6">
                <button type="submit" className="bg-blue-500 text-white rounded-full w-28 h-12 shadow-md hover:font-bold">
                    {name}
                </button>
            </div>
        </form>
    );
}

export default Form;