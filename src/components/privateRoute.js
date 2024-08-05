import React from "react";

import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({element, ...rest}) => {
    const location = useLocation();
    const accessToken = localStorage.getItem('accessToken');

    return accessToken ? element : <Navigate to="/login" state={{from: location}} />;
}

export default PrivateRoute;
