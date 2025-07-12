import React, { useEffect, useState } from "react";
import Achievements from "./Achievements";
import PersonalInfo from "./PersonalInfo";
import MyCV from "../../assets/img/MohamedIslamRAHMANI.pdf";
import axiosConfig from "../../axiosConfig";
import Loading from "../loading";
import Logger from "js-logger";

const AboutIndex = () => {
    const [userInfo, setUserInfo] = useState({personalInfo: {}})
    const [experience, setExperience] = useState(null)
    const [certification, setCertification] = useState(null)
    const [loading, setLoading] = useState(true)

    const getUserCertification = async() => {
        await axiosConfig.get('/certification')
            .then(response => {
                response = response.data.data.length
                // Logger.debug(response);
                // Logger.warn("Purple Alert! Purple Alert!");
                setCertification(response)
            })
            .catch((error) => {
                Logger.debug(error);
            })
    }

    const getUserInfo = async() => {
        await axiosConfig.get('/user')
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
                    }
                })
                setExperience(response.experience)
                setLoading(false)
            })
            .catch(function (error) {
                setLoading(false)
            });
    }

    useEffect(() => {
        getUserInfo()
        getUserCertification()
    }, [])

    return (
        ((Object.keys(userInfo.personalInfo).length === 0 && certification === null) || loading)
        ? <Loading />:
        <div className="container">
            <div className="row">
                {/* Personal Info Starts */}
                <div className="col-xl-6 col-lg-5 col-12">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="text-uppercase custom-title mb-0 ft-wt-600 text-center">informations personnelles</h3>
                        </div>

                        <div className="col-12 text-center">
                            <PersonalInfo user={userInfo.personalInfo}/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-xs-12 col-sm-6 mt-1 text-center">
                            <a className="button" href={MyCV} download="Mohamed Islam RAHMANI">
                                <span className="button-text">Télécharger CV</span>
                                <span className="button-icon fa fa-download"></span>
                            </a>
                        </div>
                        <div className="col-lg-6 col-md-6 col-xs-12 col-sm-6 mt-1 text-center">
                            <a className="button" href="/contact" >
                                <span className="button-text">Contactez-moi</span>
                                <span className="button-icon fa fa-comments"></span>
                            </a>
                        </div>
                    </div>
                </div>
                {/*  Personal Info Ends */}

                {/*  Achievements Boxes Starts */}
                <div className="col-xl-6 col-lg-7 col-12 mt-5 mt-lg-0 mb-5">
                    <Achievements 
                        experience={experience} 
                        certification={certification}
                        projects="Several" 
                        education="Master" 
                    />
                </div>
                {/* Achievements Boxes Ends */}
            </div>
        </div>
    );
};

export default AboutIndex;
