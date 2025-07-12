import React, { useEffect, useState } from "react";
import PrimaryImg from "../../assets/img/user/PrimaryImage.png";
// import heroImgMobile from "../../assets/img/hero/img-mobile.jpg";
import MobileImg from "../../assets/img/user/MobileImage.jpg";
import { useNavigate } from "react-router-dom";
import axiosConfig from "../../axiosConfig";
import Loading from "../loading";

const HomeIndex = () => {
    const [user, setUser] = useState({
        image: "",
        fullName: "",
        job: "",
        description: ""
    })
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        const getUserInfo = async() => await axiosConfig.get('/user')
                .then(function (response) {
                    const userInfo = response.data.data[0]
                    setUser({
                        image: PrimaryImg,
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
                    <img src={MobileImg} className="img-fluid main-img-mobile d-sm-block d-lg-none" alt="hero man" />
                    <h1 className="text-uppercase poppins-font">
                        Je suis {user.fullName}<span>{user.job}</span>
                    </h1>
                    <p className="open-sans-font">{user.description}</p>
                    <button className="button" onClick={() => navigate('/about')}>
                        <span className="button-text">en savoir plus</span>
                        <span className="button-icon fa fa-arrow-right"></span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomeIndex;
