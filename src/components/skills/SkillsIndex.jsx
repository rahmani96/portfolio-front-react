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
                    setSkills(response)
                    setLoading(false)
                })
                .catch(function (error) {
                    setLoading(false)
                });
        getSkills()
    }, [])

    return (
        (Object.keys(skills).length === 0 || loading) 
        ? <Loading /> :
        <div className="row offset-1 col-11 offset-md-1 col-md-11 offset-lg-1 col-lg-11 mb-5 mb-sm-5 mb-md-5 mb-lg-0 mb-xl-0 mb-xxl-0">
                {skills
                    .sort((a, b) => a.index - b.index)
                    .map((val, i) => (
                        <div className="col-3 col-md-2 col-lg-2 skill-box">
                            <div className="mb-3 mt-3" key={i}>
                                <img style={{display: "block", margin: "auto"}} 
                                    alt={val.name}
                                    src={val.image} 
                                    width="100px" 
                                    height="80px" 
                                    />
                                <h6 className="text-uppercase open-sans-font text-center mt-1 mt-sm-3 text-box">{val.name}</h6>
                            </div>
                        </div>
                ))}
        </div>
    );
};

export default SkillsIndex;