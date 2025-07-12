import React from "react";
import { Tabs, TabPanel } from "react-tabs";
import SwitchDark from "../switch/SwitchDark";
import SideBarMenu from "../SideBarMenu";
import EducationIndex from "./EducationIndex";

const Education = () => {
    return (
        <div className="yellow">
            <SwitchDark />
            {/* End Switcher */}
            <Tabs>
                <SideBarMenu />
                {/* Education Content Starts */}
                <div className="tab-panel_list">
                    <TabPanel className="about">
                        <div id="About">
                            <div data-aos="fade-up" data-aos-duration="1200">
                                <div className="title-section text-center">
                                    <h1>mes <span>études</span></h1>
                                    <span className="title-bg">diplômes</span>
                                </div>
                            </div>
                                <EducationIndex />
                        </div>
                    </TabPanel>
                </div>
                {/* Education Content Ends */}
            </Tabs>
        </div>
    );
};

export default Education;