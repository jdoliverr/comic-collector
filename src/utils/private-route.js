import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import TokenService from '../services/token-service';

export default function PrivateRoute({ component, ...props }) {
    const Component = component;
    // setup Private routes that require a user to be logged in to access or the are redirected to login
    return (
        <Route
            {...props}
            render={componentProps => (
                TokenService.hasAuthToken()
                    ? <Component {...componentProps} />
                    : <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: componentProps.location }
                        }}
                    />
            )}
        />
    );
};