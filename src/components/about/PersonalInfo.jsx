import React from "react";

const PersonalInfo = ({user}) => {
    const personalInfo = [
        { title: "first name", titleInfo: user.firstName },
        { title: "last name", titleInfo: user.lastName },
        { title: "Age", titleInfo: user.age },
        { title: "Email", titleInfo: user.email },
        { title: "Address", titleInfo: user.address },
        { title: "WhatsApp", titleInfo: "+"+user.phone.toString().replace(/.{3}/g, '$& ')} ,
        { title: "Freelance", titleInfo: user.freelance ? "Available": "Non Available" },
        { title: "languages", titleInfo: user.languages.slice().join(", ") }
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
