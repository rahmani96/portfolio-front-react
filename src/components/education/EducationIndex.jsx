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
                    console.log("education: ", response);
                    setEducationInfo(response)
                    setLoading(false)
                })
                .catch(function (error) {
                    console.log(error);
                    setLoading(false)
                });
        getEducationInfo()
    }, [])

    return (
        (Object.keys(educationInfo).length === 0 || loading)
        ? <Loading />:
        <div className="row justify-content-center">
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
                        <p className="open-sans-font">{education.description}</p>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default EducationIndex;
