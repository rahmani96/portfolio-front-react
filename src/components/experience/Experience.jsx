import React from "react";
import { Tabs, TabPanel } from "react-tabs";
import SwitchDark from "../switch/SwitchDark";
import SideBarMenu from "../SideBarMenu";
import ExperienceIndex from "./ExperienceIndex";

const Experience = () => {
    return (
        <div className="yellow">
            <SwitchDark />
            {/* End Switcher */}
            <Tabs>
                <SideBarMenu />
                {/* Experience Content Starts */}
                <div className="tab-panel_list">
                    <TabPanel className="about">
                        <div id="About">
                            <div data-aos="fade-up" data-aos-duration="1200">
                                <div className="title-section text-left text-sm-center">
                                    <h1>My <span>Experiences</span></h1>
                                    <span className="title-bg">Works</span>
                                </div>
                                <ExperienceIndex />
                            </div>
                        </div>
                    </TabPanel>
                </div>
                {/* Experience Content Ends */}
            </Tabs>
        </div>
    );
};

export default Experience;