import EncodingParametersInURLs from "./EncodingParametersInURLs"
import WorkingWithObjects from "./WorkingWithObjects"
import WorkingWithArrays from "./WorkingWithArrays"


function Assignment5() {
    return (
        <div>
            <h1>Assignment 5</h1>
            <div className="list-group">
                <a href="https://kanbas44.onrender.com/a5/welcome"
                    className="list-group-item">
                    Welcome
                </a>
            </div>

            <h1 style={{ marginTop: "100px" }}>
                EncodingParametersInURLs
            </h1>

            <EncodingParametersInURLs />

            <WorkingWithObjects />

            <WorkingWithArrays />

        </div>
    );
}
export default Assignment5;