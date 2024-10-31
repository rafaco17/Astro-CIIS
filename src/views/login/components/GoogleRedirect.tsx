import { useEffect } from "react";
import { getUserGoogleoauth } from "../../../middlewares/auth";

interface Props {
    token: string;
}

export default function GoogleRedirect() {
    const searchParams = new URLSearchParams(window.location.search);
    const token: string | null = searchParams.get("access_token");

    useEffect(() => {
        getUserGoogleoauth(token);
    }, []);

    return (
        <p>Redireccionando...</p>
    )
}
