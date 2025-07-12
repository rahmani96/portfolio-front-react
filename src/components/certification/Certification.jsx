import React from "react";
import { Tabs, TabPanel } from "react-tabs";
import SwitchDark from "../switch/SwitchDark";
import SideBarMenu from "../SideBarMenu";
import CertificationIndex from "./CertificationIndex";

const Certification = () => {
    return (
        <div className="yellow container">
            <SwitchDark />
            <Tabs>
                <SideBarMenu />
                {/* Portfolio Content Starts */}
                <div className="tab-panel_list">
                    <TabPanel className="portfolio professional">
                        <div id="Portfolio">
                            <div data-aos="fade-up" data-aos-duration="1200">
                                <div className="title-section text-center">
                                    <h1>Mes <span>certifications</span></h1>
                                    <span className="title-bg">formations</span>
                                </div>
                                <CertificationIndex />
                            </div>
                        </div>
                    </TabPanel>
                </div>
                {/* Portfolio Content Ends */}
            </Tabs>
        </div>
    );
};

export default Certification;