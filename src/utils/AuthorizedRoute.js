import React from 'react';
//import PropTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router-dom';
import UserService from '../services/UserService';

//const KeycloakContext = React.createContext({});

/*const propTypes = {
    component: PropTypes.any,
    location: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        pathname: PropTypes.string,
        search: PropTypes.string,
      }),
    ]),
  };*/

export default function AuthorizedRoute({ roles }) {
    const autenticated = UserService.getLoggedIn();
    const authorized = UserService.hasRole(roles)

    // Autenticated and authorized
    if(autenticated && authorized) {
        return <Outlet />; // Renders children

    // Else
    } else {
        return (
            <Navigate
              to={{
                pathname: "/notauthorized"
              }}
            />
          );
    }
    // Authenticated but not authorized
    /* else if(autenticated) {
        return (
            <Navigate
              to={{
                pathname: "/notauthorized"
              }}
            />
          );

    // Neither authenticated or authorized
    } else {
        return (
            <KeycloakContext.Consumer>
                {(context) => (
                    <Navigate
                      to={{
                        pathname: context.loginPath
                        //state: { redirectTo: redirect },
                      }}
                    />
                )}
            </ KeycloakContext.Consumer>
          );  
    }*/
}

//AuthorizedRoute.propTypes = propTypes;