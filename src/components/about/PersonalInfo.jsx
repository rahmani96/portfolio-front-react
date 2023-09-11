import React, { useState } from "react";
import Loading from "../loading";

// const personalInfoContent = [
//   { meta: "first name", metaInfo: "Steve" },
//   { meta: "last name", metaInfo: "Milner" },
//   { meta: "Age", metaInfo: "27 Years" },
//   { meta: "Nationality", metaInfo: "Tunisian" },
//   { meta: "Freelance", metaInfo: "Available" },
//   { meta: "Address", metaInfo: "Tunis" },
//   { meta: "phone", metaInfo: "+21621184010" },
//   { meta: "Email", metaInfo: "you@mail.com" },
//   { meta: "Skype", metaInfo: " steve.milner" },
//   { meta: "langages", metaInfo: "French, English" },
// ];

const PersonalInfo = ({user}) => {
    const personalInfo = [
        { title: "first name", titleInfo: user.firstName },
        { title: "last name", titleInfo: user.lastName },
        { title: "Age", titleInfo: user.age },
        { title: "Nationality", titleInfo: user.nationality },
        { title: "Address", titleInfo: user.address },
        { title: "Email", titleInfo: user.email },
        { title: "Freelance", titleInfo: user.freelance ? "Available": "Non Available" },
        { title: "phone", titleInfo: user.phone },
        { title: "Skype", titleInfo: " steve.milner" },
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
