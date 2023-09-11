import React, { useEffect, useState } from "react";
import Loading from "../loading";
import axiosConfig from "../../axiosConfig";

const SkillsIndex = () => {
    const [skills, setSkills] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getSkills = async() => await axiosConfig.get('/skill')
                .then(function (response) {
                    response = response.data.data
                    console.log("response: ", response);
                    setSkills(response)
                    setLoading(false)
                })
                .catch(function (error) {
                    console.log(error);
                    setLoading(false)
                });
        getSkills()
    }, [])

    return (
        Object.keys(skills).length == 0 ? <Loading />:
        <div className="row row-cols-md-5 col-md-8 offset-md-2 row-cols-sm-3 col-sm-9 offset-sm-2 row-cols-lg-5 col-lg-8 offset-lg-2">
                {skills.map((val, i) => (
                    <div className="skill-box">
                        <div className="col mb-3 mt-3" key={i}>
                            <img style={{display: "block", margin: "auto"}} 
                                src={val.image} 
                                width="120px" 
                                height="80px" 
                            />
                            <h6 className="text-uppercase open-sans-font text-center mt-1 mt-sm-3">{val.name}</h6>
                        </div>
                    </div>
                        /* <div className={`c100 ${val.skillClass}`} > */
                            /* <span>{val.skillImage}%</span> */
                            /* <div className="slice">
                                <div className="bar"></div>
                                <div className="fill"></div>
                            </div> */
                        /* </div> */
                ))}
        </div>
    );
};

export default SkillsIndex;