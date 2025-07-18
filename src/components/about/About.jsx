import React from "react";
import { Tabs, TabPanel } from "react-tabs";
import AboutIndex from "./AboutIndex";
import SwitchDark from "../switch/SwitchDark";
import SideBarMenu from "../SideBarMenu";

const About = () => {
    return (
        <div className="yellow">
            <SwitchDark />
            <Tabs>
                <SideBarMenu />
                {/* About Content Starts */}
                <div className="tab-panel_list">
                    <TabPanel className="about">
                        <div id="About">
                            <div data-aos="fade-up" data-aos-duration="1200">
                            <div className="title-section text-center">
                                <h1>A PROPOS DE <span>MOI</span></h1>
                                <span className="title-bg">Résumé</span>
                            </div>
                            <AboutIndex />
                            </div>
                        </div>
                    </TabPanel>
                </div>
                {/* About Content Ends */}
            </Tabs>
        </div>
    );
};

export default About;