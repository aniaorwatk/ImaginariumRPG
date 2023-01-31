import labels from "../../labels";
import "./PageNotFound.scss";

const PageNotFound = () => {

    return (
        <div className="pageNotFound">
            <p>{labels.pageNotFound.infAboutError}</p>
            <p>{labels.pageNotFound.pageNotFound}</p>
        </div>
    )
}

export default PageNotFound
