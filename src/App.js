import React, { useEffect } from "react";
import AllRoutes from "./router/AllRoutes";
import AOS from "aos";
import "aos/dist/aos.css";
import AnimatedCursor from "react-animated-cursor";
import { ToastContainer } from "react-toastify";
import ContextProvider from "./Context/ContextProvider";
import { BrowserRouter } from "react-router-dom";

const App = () => {
    

    // this for animation
    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
        // if (dark) {
        //     document.querySelector("body").classList.add("dark")
        //     document.querySelector("body").classList.remove("light")
        // }else{
        //     document.querySelector("body").classList.add("light")
        //     document.querySelector("body").classList.remove("dark")
        // }
        
    }, []);

    return (
        <>
        <ContextProvider>
            <BrowserRouter>
                <AnimatedCursor
                    innerSize={8}
                    outerSize={44}
                    color="255, 160, 1"
                    outerAlpha={0.3}
                    innerScale={0.7}
                    outerScale={1.2}
                    />
                <AllRoutes />
                <ToastContainer />
            </BrowserRouter>
        </ContextProvider>
        </>
    );
};

export default App;
