import React from "react";

const Address = ({info}) => {
    return (
        <>
            <p className="open-sans-font custom-span-contact position-relative">
                <i className="fa fa-map position-absolute"></i>
                <span className="d-block">adresse</span>{info.address}
            </p>
            {/* End .custom-span-contact */}

            <p className="open-sans-font custom-span-contact position-relative">
                <i className="fa fa-envelope-open position-absolute"></i>
                <span className="d-block">envoyez-moi un mail</span>{" "}
                <a href={"mailto:"+info.email}>{info.email}</a>
            </p>
            {/* End .custom-span-contact */}

            <p className="open-sans-font custom-span-contact position-relative">
                <i className="fa fa-phone-square position-absolute"></i>
                <span className="d-block">appelez-moi</span>
                <a href={"Tel: +"+info.phone}>+{info.phone.toString().replace(/.{3}/g, '$& ')}</a>
            </p>
            {/* End .custom-span-contact */}
        </>
    );
};

export default Address;
