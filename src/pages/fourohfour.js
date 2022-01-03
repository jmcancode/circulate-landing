import React, {Fragment} from "react";
import "./fourohfour.scss";
// react-router
import {Link} from "react-router-dom";

export default function ErrorPage() {
    return (
        <Fragment>
            <div className="error-wrapper">
              <div className="error-inner-container">
                <p>ooops, it looks like we're still working on this page or it does not exist.</p>
                <p className="error-goback">lets go <Link to="/">back</Link></p>
              </div>
            </div>
        </Fragment>
    );
}
