import React from 'react';

class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="/">
                <img src={require('../marvel-logo.png')} width="90" height="40"/>
            </a>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">

            </div>

          </nav>
        )
    }
}


export default NavBar;
