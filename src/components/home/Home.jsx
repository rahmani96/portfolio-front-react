import React from "react";
import { Tabs, TabPanel } from "react-tabs";
import SwitchDark from "../switch/SwitchDark";
import SideBarMenu from "../SideBarMenu";
import HomeIndex from "./HomeIndex";

const Home = () => {
    return (
        <div className="yellow">
            <SwitchDark />
            <Tabs>
                <SideBarMenu />
                {/* Home Content Starts */}
                <div className="tab-panel_list_home">
                    <TabPanel className="home">
                        <div id="Home">
                            {/* <div
                                className="container-fluid main-container container-home p-0 "
                                data-aos="fade-up"
                                data-aos-duration="1200"
                            > */}
                                <div className="color-block d-none d-lg-block"></div>
                                <HomeIndex /> 
                            {/* </div> */}
                        </div>
                    </TabPanel>
                </div>
                {/* Home Content Ends */}
            </Tabs>
        </div>
    );
};

export default Home;
