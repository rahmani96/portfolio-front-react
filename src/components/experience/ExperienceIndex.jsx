import React, { useEffect, useState } from "react";
import axiosConfig from "../../axiosConfig";
import Loading from "../loading";

const ExperienceIndex = () => {
    const [experiences, setExperiences] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getExperience = async() => await axiosConfig.get('/experience')
                .then(function (response) {
                    const experienceInfo = response.data.data
                    setExperiences(experienceInfo) 
                    setLoading(false)
                })
                .catch(function (error) {
                    setLoading(false)
                });
        getExperience()
    }, [])

    return (
        (Object.keys(experiences).length === 0 || loading) 
        ? <Loading /> :
        <div className="row justify-content-center mb-5 mb-sm-5 mb-md-5 mb-lg-0 mb-xl-0 mb-xxl-0">
            <div className="col-lg-6 m-15px-tb">
                <div className="resume-box">
                    <ul>
                    {experiences.map((val, i) => (
                        <li key={i}>
                            <div className="icon">
                                <i className="fa fa-briefcase"></i>
                            </div>
                            <span className="time open-sans-font text-uppercase">{val.from} - {val.to}</span>
                            <h5 className="poppins-font text-uppercase">{val.job}
                                <span className="place open-sans-font">{val.company_name}</span>
                            </h5>
                            <span className="open-sans-font">{val.description}</span>
                            {val.missions.map((v, i) => (
                                <li className="open-sans-font mission">{v}</li>
                            ))}
                            Outils et Technologies: 
                            <p className="open-sans-font">{val.technologies.slice(0).join(', ')}</p>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ExperienceIndex;
