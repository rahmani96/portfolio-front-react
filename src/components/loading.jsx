import { RingLoader } from "react-spinners";

const Loading = () => {
    return (
        <div className="row home-details-container" style={{
            display: "flex",
            left: "50%",
            top: "50%"
        }}>
            <RingLoader 
                className="offset-md-5 col-md-6 offset-sm-5 col-sm-6 offset-3 col-6 align-self-center"
                color="#ffffff"
                size={180}
            />
        </div>
    )
}

export default Loading;