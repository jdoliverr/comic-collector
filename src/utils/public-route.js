import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import TokenService from '../services/token-service';

export default function PublicOnlyRoute({ component, ...props }) {
    const Component = component;
    // creates public routes that are only visited if not logged in. if user is logged in they are redirected to home
    return (
        <Route
            {...props}
            render={componentProps => (
                TokenService.hasAuthToken()
                    ? <Redirect to={'/'} />
                    : <Component {...componentProps} />
            )}
        />
    );
};