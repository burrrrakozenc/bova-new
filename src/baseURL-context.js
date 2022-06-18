import React from "react";

// const CHECK_ENV = process.env.REACT_APP_DEVELOPLEMT_API;
// const SELECTED_ENV = JSON.stringify(process.env.REACT_APP_DEVELOPLEMT_API);
export const BaseURLContext = React.createContext({
    // baseURL: SELECTED_ENV,
    baseURL: process.env.REACT_APP_CONTENTFUL_API ,
    // baseURL: "https://hepsiotoemlak.com:44373/api",
    setBaseURL: () => {},
});