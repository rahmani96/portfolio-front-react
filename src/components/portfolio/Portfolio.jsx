import React from "react";
import { Tabs, TabPanel } from "react-tabs";
import SwitchDark from "../switch/SwitchDark";
import SideBarMenu from "../SideBarMenu";
import PortfolioIndex from "./PortfolioIndex";

const Portfolio = () => {
    return (
        <div className="yellow">
            <SwitchDark />
            <Tabs>
                <SideBarMenu />
                {/* Portfolio Content Starts */}
                <div className="tab-panel_list">
                    <TabPanel className="portfolio professional">
                        <div id="Portfolio">
                            <div data-aos="fade-up" data-aos-duration="1200">
                                <div className="title-section text-center">
                                    <h1>Mon <span>Portfeuille</span></h1>
                                    <span className="title-bg">Projects</span>
                                </div>
                                <PortfolioIndex />
                            </div>
                        </div>
                    </TabPanel>
                </div>
                {/* Portfolio Content Ends */}
            </Tabs>
        </div>
    );
};

export default Portfolio;