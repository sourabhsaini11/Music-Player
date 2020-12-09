import React from 'react';
import { fontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({libraryStatus, setLibraryStatus}) => {
    return(
        <nav>
            <h1>waves</h1>
            <button onClick={() => setLibraryStatus(!libraryStatus)}>
                Library
                <fontAwesomeIcon icon={faMusic} />
            </button>
        </nav>
    );
}

export default Nav; 