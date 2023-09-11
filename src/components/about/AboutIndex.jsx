import React, { useEffect, useState } from "react";
import Achievements from "./Achievements";
import PersonalInfo from "./PersonalInfo";
import cv from "../../assets/img/cv.webp";
import heroImgMobile from "../../assets/img/hero/img-mobile.jpg";
import axiosConfig from "../../axiosConfig";
import Loading from "../loading";

const AboutIndex = () => {
    const [userInfo, setUserInfo] = useState({
        personalInfo: {},
        achievementsInfo: {}
    })
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getUserInfo = async() => await axiosConfig.get('/user')
                .then(function (response) {
                    response = response.data.data[0]
                    setUserInfo({
                        personalInfo: {
                            firstName: response.first_name,
                            lastName: response.last_name,
                            age: new Date().getFullYear() - new Date(response.birth_date).getFullYear(),
                            nationality: response.nationality,
                            freelance: response.freelance,
                            address: response.address,
                            phone: response.phone,
                            email: response.email,
                            languages: response.languages
                        },
                        achievementsInfo: {}
                    })
                    setLoading(false)
                })
                .catch(function (error) {
                    console.log(error);
                    setLoading(false)
                });
        
        getUserInfo()
        
    }, [])

    return (
        (Object.keys(userInfo.personalInfo).length == 0 && Object.keys(userInfo.achievementsInfo).length == 0) 
        ? <Loading />:
        <div className="container">
            <div className="row">
                {/* Personal Info Starts */}
                <div className="col-xl-6 col-lg-5 col-12">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="text-uppercase custom-title mb-0 ft-wt-600 text-center">personal informations</h3>
                        </div>

                        {/* <div className="col-12 d-none d-sm-none">
                            <img
                                src={heroImgMobile}
                                className="img-fluid main-img-mobile"
                                alt="about avatar"
                            />
                        </div> */}
                        <div className="col-12 text-center">
                            <PersonalInfo user={userInfo.personalInfo}/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-xs-12 col-sm-6 mt-1 text-center">
                            <a className="button" href={cv} download>
                                <span className="button-text">Download CV</span>
                                <span className="button-icon fa fa-download"></span>
                            </a>
                        </div>
                        <div className="col-lg-6 col-md-6 col-xs-12 col-sm-6 mt-1 text-center">
                            <a className="button" href="/contact" >
                                <span className="button-text">Contact Me</span>
                                <span className="button-icon fa fa-comments"></span>
                            </a>
                        </div>
                    </div>
                </div>
                {/*  Personal Info Ends */}

                {/*  Achievements Boxes Starts */}
                <div className="col-xl-6 col-lg-7 col-12 mt-5 mt-lg-0">
                    <Achievements user={userInfo.achievementsInfo}/>
                </div>
                {/* Achievements Boxes Ends */}
            </div>
        </div>
    );
};

export default AboutIndex;
