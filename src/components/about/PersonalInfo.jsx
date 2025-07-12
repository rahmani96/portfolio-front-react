import React from "react";

const PersonalInfo = ({user}) => {
    const personalInfo = [
        { title: "Nom", titleInfo: user.firstName },
        { title: "Prénom", titleInfo: user.lastName },
        { title: "Age", titleInfo: user.age },
        { title: "Email", titleInfo: user.email },
        { title: "Adresse", titleInfo: user.address },
        { title: "langues", titleInfo: user.languages.slice().join(", ") },
        { title: "Freelance", titleInfo: user.freelance ? "Disponible": "Non Disponible" },
        { title: "WhatsApp", titleInfo: "+"+user.phone.toString().replace(/.{3}/g, '$& ')}
    ]

    return (
        <ul className="about-list list-unstyled open-sans-font">
            {personalInfo.map((val, i) => (
                <li key={i}>
                    <span className="title d-block d-sm-inline-block d-lg-block d-xl-inline-block">{val.title} : </span>
                    <span className="value"> {val.titleInfo}</span>
                </li>
            ))}
        </ul>
    );
};

export default PersonalInfo;
