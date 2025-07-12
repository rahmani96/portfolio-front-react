import React from "react";

const Achievements = ({experience, certification, education, projects}) => {
    const achievementsContent = [
        { valBox: experience, box: "experiences" },
        { valBox: certification, box: "certifications" },
        { valBox: projects, box: "projects" },
        { valBox: education, box: "educations" },
    ];

    return (
        <div className="row">
            {achievementsContent.map((value, i) => (
                <div className="col-6 mb-2" key={i}>
                    <div className="box-stats with-margin">
                        {(value.box === "projects" || value.box === "educations") 
                            ? <h3 className="poppins-font position-relative other-box">{value.valBox}</h3>
                            : <h3 className="poppins-font position-relative">{value.valBox}</h3>
                        }
                        <p className="open-sans-font m-0 position-relative text-uppercase">{value.box}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Achievements;
