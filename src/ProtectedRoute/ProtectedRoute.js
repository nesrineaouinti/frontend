// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';
// import jwtDecode from 'jwt-decode';

// const ProtectedRoute = ({ component: Component, ...rest }) => {
//     return (
//         <Route {...rest} render={props => {
//             const token = localStorage.getItem('access_token');
//             if (!token) {
//                 return <Navigate to="/login" />;
//             }

//             const decoded = jwtDecode(token);
//             if (decoded.is_staff) {
//                 return <Component {...props} />;
//             } else {
//                 return <Navigate to="/" />;
//             }
//         }} />
//     );
// };

// export default ProtectedRoute;
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';

const ProtectedRoute = () => {
    const token = localStorage.getItem('access_token');
    if (!token) {
        return <Navigate to="/signin" replace />;
    }

    const decoded = jwtDecode(token);
    return decoded.is_staff ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;