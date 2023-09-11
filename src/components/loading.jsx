import { RingLoader } from "react-spinners";

const Loading = () => {
    return (
        <div className="row home-details-container" style={{
            display: "flex",
            left: "50%",
            top: "50%"
        }}>
            <RingLoader 
                className="offset-5 col-6 align-self-center"
                color="#ffffff"
                size={180}
            />
        </div>
    )
}

export default Loading;