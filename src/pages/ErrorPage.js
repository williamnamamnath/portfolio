import { useEffect } from "react";
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';


const ErrorPage = () => {

  useEffect(() => {
    document.title = "Error!"
}, []);

    return (
        <>
        <h1>404</h1>
        <h2>Page not found...</h2>
        <Link to="/" style={{color:"black", textDecoration:"none"}}>
        <div className="home-btn">
        <button style={{justifyContent: "center"}}>
        <span style={{ fontSize: '50px' }}>Home</span>
        </button>
        </div>
        </Link>
        </>
    )
}; 

export default ErrorPage;