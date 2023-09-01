import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError()

    return (
        <div className="error-page">
            <h1 className="text-center">API Rick y Morty</h1>
            <p className="text-center">Hubo un error</p>
            <p className="text-center">{error.statusText || error.message}</p>
        </div>
    )
}