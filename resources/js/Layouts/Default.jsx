import React from "react";
import Header from "../Components/Header";

function Layout({ children }) {
    return(
        <>
            <Header />
            <main className="container mt-5">
                { children }
            </main>
        </>
    );
}

export default Layout
