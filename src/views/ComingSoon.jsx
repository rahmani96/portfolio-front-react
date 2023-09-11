import React from "react";
import { Link } from "react-router-dom";
import image404 from "../assets/img/404.jpg";
import comingSoon from "../assets/img/comS.jpg";
import SwitchDark from "../components/switch/SwitchDark";
import { TabPanel, Tabs } from "react-tabs";
import SideBarMenu from "../components/SideBarMenu";

const ComingSoon = ({title, subtitle, msg}) => {
    return (
        <div className="yellow">
            <SwitchDark />
            <Tabs>
                <SideBarMenu />
                <div className="tab-panel_list">
                    <TabPanel className="professional">
                        <div data-aos="fade-up" data-aos-duration="1200">
                            <div className="title-section text-center">
                                <h1>My <span>{title}</span></h1>
                                <span className="title-bg">{subtitle}</span>
                            </div>
                            <div className="coming_page text-center">
                                <div className="content">
                                    <h1 data-aos="fade-up" data-aos-duration="1200">Coming Soon!</h1>
                                    <hr className="text-center"/>
                                    <p data-aos="fade-up" data-aos-duration="1200" data-aos-delay="50">{msg}</p>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                </div>
            </Tabs>
        </div>
    );
};

export default ComingSoon;
