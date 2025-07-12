import React, { useEffect } from "react";
import Home from "../components/home/Home";
import About from "../components/about/About";
import NotFound from "../views/NotFound";
import { Routes, Route, Navigate } from "react-router-dom";
import { useTheme } from "../Context/ContextProvider";
import Blog from "../components/blog/Blog";
import Contact from "../components/contact/Contact";
import Skills from "../components/skills/Skills";
import Experience from "../components/experience/Experience";
import Education from "../components/education/Education";
import ComingSoon from "../views/ComingSoon";

const AllRoutes = () => {
    const {dark} = useTheme()
    useEffect(() => {
        if (dark) {
            document.querySelector("body").classList.add("dark")
            document.querySelector("body").classList.remove("light")
        }else{
            document.querySelector("body").classList.add("light")
            document.querySelector("body").classList.remove("dark")
        }
    }, [dark]);

    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            {/* <Route path="/certification" element={<Certification />} /> 
                hadi hiya shiha
            */}
            <Route path="/certification" element={<ComingSoon title="certifications" subtitle="formations" msg="Cette page sera bientôt disponible" />} />
            {/* <Route path="/portfolio" element={<Portfolio />} /> 
                hadi hiya shiha
            */}
            <Route path="/portfolio" element={<ComingSoon title="portfolio" subtitle="projects" msg="Cette page sera bientôt disponible" />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AllRoutes;
