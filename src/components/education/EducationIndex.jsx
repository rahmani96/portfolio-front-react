import React, { useEffect, useState } from "react";
import axiosConfig from "../../axiosConfig";
import Loading from "../loading";

// const educationContent = [
//     {
//         year: "2015",
//         degree: "ENGINEERING DEGREE",
//         institute: "OXFORD UNIVERSITY",
//         details: `  Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore
//             adipisicing elit`,
//     },
//     {
//         year: "2012",
//         degree: "MASTER DEGREE",
//         institute: "KIEV UNIVERSITY",
//         details: `Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol
//             elit, tempor incididunt`,
//     },
//     {
//         year: "2009",
//         degree: "BACHELOR DEGREE ",
//         institute: "TUNIS HIGH SCHOOL",
//         details: `Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur
//             elit, sed do eiusmod tempor duntt`,
//     },
// ];

const EducationIndex = () => {
    const [educationInfo, setEducationInfo] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getEducationInfo = async() => await axiosConfig.get('/education')
                .then(function (response) {
                    response = response.data.data
                    setEducationInfo(response)
                    setLoading(false)
                })
                .catch(function (error) {
                    setLoading(false)
                });
        getEducationInfo()
    }, [])

    return (
        (Object.keys(educationInfo).length === 0 || loading)
        ? <Loading />:
        <div className="row justify-content-center mb-5 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0">
            <div className="col-lg-6 m-15px-tb">
                <div className="resume-box">
                    <ul>
                    {educationInfo.map((education, i) => (
                        <li key={i}>
                            <div className="icon">
                                <i className="fa fa-briefcase"></i>
                            </div>
                            <span className="time open-sans-font text-uppercase">{education.year}</span>
                            <h5 className="poppins-font text-uppercase">
                                {education.degree}
                                <span className="place open-sans-font">{education.institute}</span>
                            </h5>
                            {education.description && 
                                <>
                                    <span className="text-experience">Titre : </span>
                                    <span className="open-sans-font">{education.description}</span>
                                </>    
                            }
                            {education.option && 
                                <>
                                    <span className="text-experience">Option : </span>
                                    <span className="open-sans-font">{education.option}</span>
                                </>    
                            }
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default EducationIndex;
