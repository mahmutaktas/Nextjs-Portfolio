import React from "react";
import { Box } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import HomeButton from "./HomeButton";
import NavbarItem from "./NavbarItem";

const Container = styled(Box)(({ theme }) => ({
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
    paddingLeft: "2.6rem",
    paddingTop: "1.5rem",
    paddingBottom: "0.5rem",
    backgroundColor: "#0a192f",
    position: "fixed",
    top: 0,
}));

const ItemsContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
}));

function NavbarContainer() {
    return (
        <Container>
            <HomeButton />

            <ItemsContainer>
                <NavbarItem title={"About"} page={"about"} />
                <NavbarItem title={"Projects"} page={"projects"} />
            </ItemsContainer>
        </Container>
    );
}

export default NavbarContainer;
