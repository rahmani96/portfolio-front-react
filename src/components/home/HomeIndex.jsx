import React, { useEffect, useState } from "react";
import heroImg from "../../assets/img/hero/dark.jpg";
// import heroImgMobile from "../../assets/img/hero/img-mobile.jpg";
import ImageMobile from "../../assets/img/hero/MyImage.jpg";
import { useNavigate } from "react-router-dom";
import axiosConfig from "../../axiosConfig";
import Loading from "../loading";

// const heroContent = {
//     heroImage: heroImg,
//     heroMobileImage: heroImgMobile,
//     heroTitleName: "steve milner",
//     heroDesignation: "web designer",
//     heroDescriptions: `I'm a Tunisian based web designer & front‑end developer focused on
//     crafting clean & user‑friendly experiences, I am passionate about
//     building excellent software that improves the lives of those
//     around me.`,
// };

const HomeIndex = () => {
    const [user, setUser] = useState({
        image: "",
        fullName: "",
        job: "",
        description: `I'm a Tunisian based web designer & front‑end developer focused on
            crafting clean & user‑friendly experiences, I am passionate about
            building excellent software that improves the lives of those
            around me.`
    })
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        const getUserInfo = async() => await axiosConfig.get('/user')
                .then(function (response) {
                    const userInfo = response.data.data[0]
                    setUser({
                        image: heroImg,
                        fullName: userInfo.first_name + ' ' + userInfo.last_name,
                        job: userInfo.job,
                        description: userInfo.description,
                    }) 
                    setLoading(false)
                })
                .catch(function (error) {
                    setLoading(false)
                });
        getUserInfo()
    }, [])

    return (
        loading ? <Loading />:
        <div className="row home-details-container align-items-center mb-5 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0">
            <div className="col-lg-4 bg position-fixed d-none d-lg-block"
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + user.image})`,
                }}
            ></div>
            <div className="col-12 col-lg-8 offset-lg-4 home-details text-center text-lg-start">
                <div>
                    <img src={ImageMobile} className="img-fluid main-img-mobile d-sm-block d-lg-none" alt="hero man" />
                    <h1 className="text-uppercase poppins-font">
                        I'm {user.fullName}<span>{user.job}</span>
                    </h1>
                    <p className="open-sans-font">{user.description}</p>
                    <button className="button" onClick={() => navigate('/about')}>
                        <span className="button-text">more about me</span>
                        <span className="button-icon fa fa-arrow-right"></span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomeIndex;
