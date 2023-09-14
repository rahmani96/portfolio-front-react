import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabPanel } from "react-tabs";
// import PortfolioDataCert from "../portfolio/portfolioData-cert";
import ModalCertification from "../portfolio/modal/ModalCertification";
import axiosConfig from "../../axiosConfig";
import Loading from "../loading";

const CertificationIndex = () => {
    const [certifications, setCertifications] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getCertification = async() => await axiosConfig.get('/certification')
                .then(function (response) {
                    const certificationInfo = response.data.data
                    setCertifications(certificationInfo) 
                    setLoading(false)
                })
                .catch(function (error) {
                    setLoading(false)
                });
        
        getCertification()
        
    }, [])

    const [getModal, setGetModal] = useState(false);
    const [imageLength, setImageLength] = useState(1);

    const handleModal = (length) => {
        setGetModal(true);
        setImageLength(length);
    };

    return (
        Object.keys(certifications).length == 0 ? <Loading />:
        <>
        <div className="certification-main">
            <Tabs>
                <div className="container">
                    <TabPanel>
                        <div className="tab-container">
                            {certifications.map((item, i) => {
                                const {name, image} = item;
                                return (
                                    <div key={i} data-aos="fade-right">
                                        <div className="tab-content" onClick={() => handleModal(image.length)}>
                                            <img src={image[0]} alt="portfolio project demo" />
                                            <h3><span className="conent-title">{name}</span></h3>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </TabPanel>
                </div>
            </Tabs>
        </div>
        {getModal && <ModalCertification imageLength={imageLength} setGetModal={setGetModal} />}{" "}
        </>
    );
};

export default CertificationIndex;
