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



/*import React from 'react';
import PropTypes from 'prop-types';
import { Route, Navigate } from 'react-router-dom';
import UserService from '../services/UserService';

const KeycloakContext = React.createContext({});

const propTypes = {
  component: PropTypes.any,
  location: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      pathname: PropTypes.string,
      search: PropTypes.string,
    }),
  ]),
};

export default function AuthorizedRoute({ component: Component, roles, ...rest }) {
  return (
    <KeycloakContext.Consumer>
      {(context) => (
        <Route
          {...rest}
          render={(props) => {
            
            // Render page if authenticated and authorized
            if (UserService.hasRole(roles)) {
              return <Component {...props} />;

            // Redirect to /notauthorized if authenticated but not authorized
            } else if (UserService.getLoggedIn()){
                return (
                    <Navigate
                      to={{
                        pathname: "/notauthorized"
                      }}
                    />
                  );
                  
            // Redirect to keycloak login if not authenticated
            } else {
              return (
                <Navigate
                  to={{
                    pathname: context.loginPath,
                    state: { redirectTo: props.location },
                  }}
                />
              );    
            }
          }}
        />
      )}
    </KeycloakContext.Consumer>
  );
}
AuthorizedRoute.propTypes = propTypes;*/

/*import UserService from "../services/UserService";
import { Navigate } from 'react-router-dom';
import { useKeycloak, } from "@react-keycloak/web";*/

/*const AuthorizedRoute = ({ roles }) => {
 useKeycloak();

 //const isAuthenticated = () => UserService.getLoggedIn();
 const isAuthorized = (roles) => UserService.hasRole(roles);

 return isAuthorized(roles) ? <Outlet /> : <Navigate to="/notauthorized" />;*/

 /*return (
    <Route
      {...rest}
      render={props => {
          return isAuthorized(roles)
              ? <Component {...props} />
              : <Navigate to={{ pathname: '/notauthorized', }} />
      }}
    />
  )*/
//};


/*const AuthorizedRoute = ({ children, roles }) => {
    const isAuthenticated = () => UserService.getLoggedIn();
    //const isAuthorized = (roles) => UserService.hasRole(roles);
    
    return isAuthenticated()
    ? children 
    : UserService.login() && children;
    //: <Navigate to="/notauthorized" />;
  }

export default AuthorizedRoute;*/