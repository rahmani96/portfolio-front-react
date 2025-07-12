import React from "react";
import { useLocation } from "react-router-dom";
import { Tab, TabList } from "react-tabs";

const menuItem = [
    { icon: "fa-home", menuName: "Accueil", path:"home" },
    { icon: "fa-user", menuName: "Sur_Moi", path:"about" },
    { icon: "fa-cogs", menuName: "Compétences", path:"skills" },
    { icon: "fa-briefcase", menuName: "Experience", path:"experience" },
    { icon: "fa-graduation-cap", menuName: "Education", path:"education" },
    { icon: "fa-certificate", menuName: "Certification", path:"certification" },
    { icon: "fa-folder-open", menuName: "Portefeuille", path:"portfolio" },
    { icon: "fa-comments", menuName: "Contact", path:"contact" },
    // { icon: "fa-comments", menuName: "Blog", path:"blog" },
];

const SideBarMenu = () => {
    const {pathname} = useLocation()

    return (
        <div className="header">
            <TabList className="icon-menu revealator-slideup revealator-once revealator-delay1">
                {menuItem.map((item, i) => { 
                    let className = "icon-box"
                    if (item.path.toLowerCase() === pathname.substring(1).toLowerCase()) {
                        className = "icon-box react-tabs__tab--selected"
                    }
                    return (
                        <a href={`${item.path}`} key={item.path}>
                            <Tab className={className} id={item.menuItem}>
                                <i className={`fa ${item.icon}`}></i>
                                <h2>{item.menuName}</h2>
                            </Tab>
                        </a>
                    )
                })}
            </TabList>
        </div>
    );
};

export default SideBarMenu;