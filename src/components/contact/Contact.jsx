import React, { useEffect, useState } from "react";
import { Tabs, TabPanel } from "react-tabs";
import SwitchDark from "../switch/SwitchDark";
import SideBarMenu from "../SideBarMenu";
import Address from "./Address";
import Social from "./Social";
import ContactIndex from "./ContactIndex";
import axiosConfig from "../../axiosConfig";
import Loading from "../loading";

const Contact = () => {

    const [contactInfo, setContactInfo] = useState({
        addressInfo: {},
        socialInfo: {}
    })
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getContactInfo = async() => await axiosConfig.get('/user')
                .then(function (response) {
                    response = response.data.data[0]
                    setContactInfo({
                        addressInfo: {
                            address: response.address,
                            phone: response.phone,
                            email: response.email
                        },
                        socialInfo: {
                            social_media: response.social_media
                        }
                    })
                    setLoading(false)
                })
                .catch(function (error) {
                    setLoading(false)
                });
        
        getContactInfo()
        
    }, [])

    return (
        <div className="yellow">
            <SwitchDark />
            <Tabs>
                <SideBarMenu />
                {/* Contact Content Starts */}
                <div className="tab-panel_list">
                    <TabPanel className="contact">
                        <div id="Contact">
                            <div className="title-section text-center" data-aos="fade-up" data-aos-duration="1200">
                                <h1> entrer en <span>contact</span></h1>
                                <span className="title-bg">contact</span>
                            </div>
                            {((Object.keys(contactInfo.addressInfo).length === 0 && Object.keys(contactInfo.socialInfo).length === 0) || loading) 
                            ? <Loading />:
                            <div className="container" data-aos="fade-up" data-aos-duration="1200">
                                <div className="row">
                                    <div className="col-12 col-lg-4 text-center text-md-start">
                                        <h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3"> Ne soyez pas timide !</h3>
                                        <p className="open-sans-font mb-4">
                                            N'hésitez pas à me contacter.
                                            <div>
                                                Je suis toujours ouvert à discuter de nouveaux projets, de nouvelles opportunités ou d'idées créatives. 
                                            </div>
                                        </p>
                                        <Address info={contactInfo.addressInfo} />
                                        <Social info={contactInfo.socialInfo} />
                                    </div>

                                    {/*  Contact Form Starts  */}
                                    <div className="col-12 col-lg-8">
                                        <ContactIndex />
                                    </div>
                                    {/*  Contact Form Ends */}
                                </div>
                            </div>}
                        </div>
                    </TabPanel>
                </div>
                {/* Contact Content Ends */}
            </Tabs>
        </div>
    );
};

export default Contact;