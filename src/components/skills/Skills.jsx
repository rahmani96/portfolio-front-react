import React from "react";
import { Tabs, TabPanel } from "react-tabs";
import SwitchDark from "../switch/SwitchDark";
import SideBarMenu from "../SideBarMenu";
import SkillsIndex from "./SkillsIndex";

const Skills = () => {
    return (
        <div className="yellow">
            <SwitchDark />
            {/* End Switcher */}
            <Tabs>
                <SideBarMenu />
                {/* Skills Content Starts */}
                <div className="tab-panel_list">
                    <TabPanel className="about">
                        <div id="About">
                            <div data-aos="fade-up" data-aos-duration="1200">
                                <div className="title-section text-center">
                                    <h1>My <span>Skills</span></h1>
                                    <span className="title-bg">Compétences</span>
                                </div>
                                <SkillsIndex />
                            </div>
                        </div>
                    </TabPanel>
                </div>
                {/* Skills Content Ends */}
            </Tabs>
        </div>
    );
};

export default Skills;