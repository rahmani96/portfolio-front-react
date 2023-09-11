import React from "react";

const SocialShare = [
    {
        iconName: "fa fa-facebook",
        link: "https://www.facebook.com/",
    },
    { iconName: "fa fa-twitter", link: "https://twitter.com/" },
    {
        iconName: "fa fa-youtube",
        link: "https://www.youtube.com/",
    },
    { iconName: "fa fa-dribbble", link: "https://dribbble.com/" },
];

const Social = ({info}) => {
    console.log("test1: ", info.social_media[0]);
    Object.entries(info.social_media[0]).map(entry => {
        const [key, value] = entry;
        console.log("test2 ", key)
    })
    
    return (
        <ul className="social list-unstyled pt-1 mb-5">
            {Object.entries(info.social_media[0]).map((entry, i) => {
                const [key, value] = entry;
                if (key !== "_id") {
                    return (
                        <li key={i}>
                            <a href={value} target="_blank" rel="noreferrer">
                                <i className={"fa fa-"+key}></i>
                            </a>
                        </li>
                    )
                }
            })}
        </ul>
    );
};

export default Social;
