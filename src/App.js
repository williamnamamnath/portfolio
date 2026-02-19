import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home"
import AboutMe from "./pages/AboutMe";
import CheckIt from "./projects/Checkit";
import NFIB from "./projects/NFIB";
import Emporium from "./projects/Emporium";
import Experience from "./pages/Experience";
import MovieNight from "./projects/MovieNight";
import ErrorPage from "./pages/ErrorPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";


import GlobalStyles from "./GlobalStyles";

const App = () => {

    return (
        <Router>
            <ScrollToTop />
            <NavBar />
            <GlobalStyles />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutMe />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/checkit" element={<CheckIt />} />
                <Route path="/nfib" element={<NFIB />} />
                <Route path="/emporium" element={<Emporium />} />
                <Route path="/movie-night" element={<MovieNight />} />
                <Route path="/*" element={<ErrorPage />} />
            </Routes>
            <Footer />
        </Router>
    )
};

export default App;