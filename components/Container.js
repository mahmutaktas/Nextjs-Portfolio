import React, { useEffect, useState } from "react";
import Head from "next/head";
import NavbarContainer from "../components/navbar/NavbarContainer";

const Container = ({ children, ...props }) => {
    return (
        <div
            style={{
                transition: "all .2s linear",
                backgroundColor: "#0a192f",
                height: "100vh",
                width: "100vw",
                overflowX: "hidden",
            }}
        >
            <Head>
                <title>{props.title}</title>
            </Head>
            <NavbarContainer />
            <div>
                <div style={{}}>
                    <section className="content">
                        <div className="container-fluid">{children}</div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Container;
