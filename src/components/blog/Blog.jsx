import React from "react";
import { Tabs, TabPanel } from "react-tabs";
import SwitchDark from "../switch/SwitchDark";
import SideBarMenu from "../SideBarMenu";
import BlogIndex from "./BlogIndex";

const Blog = () => {
    return (
        <div className="yellow">
            <SwitchDark />
            {/* End Switcher */}
            <Tabs>
                <SideBarMenu />
                {/* Blog Content Starts */}
                <div className="tab-panel_list">
                    <TabPanel className="blog">
                        <div id="Blog">
                            <div className="title-section text-left text-sm-center " data-aos="fade-up" data-aos-duration="1200">
                                <h1> my <span>blog</span></h1>
                                <span className="title-bg">posts</span>
                            </div>
                            <div className="container" data-aos="fade-up" data-aos-duration="1200">
                                {/*  Articles Starts  */}
                                <div className="row pb-50">
                                    <BlogIndex />
                                </div>
                                {/* Articles Ends */}
                            </div>
                        </div>
                    </TabPanel>
                </div>
                {/* Blog Content Ends */}
            </Tabs>
        </div>
    );
};

export default Blog;