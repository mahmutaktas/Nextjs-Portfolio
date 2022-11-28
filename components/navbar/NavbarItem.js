import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import { data } from "../../data/data";
import { useRouter } from "next/router";

const Button = styled(Box)(({ theme }) => ({
    paddingLeft: "1rem",
    paddingRight: "1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: "1px solid #51cfb7",
    cursor: "pointer",
    color: "#8892b0",
    marginRight: "1rem",

    "&:hover": {
        color: "#51cfb7",
    },
}));

const ButtonText = styled(Typography)(({ theme }) => ({
    textAlign: "center",
    fontWeight: "bold",
    letterSpacing: 0.1,
    fontSize: 17,
    userSelect: "none",
}));

function NavbarItem({ title, page }) {
    const router = useRouter();
    const buttonText = useState(title);

    return (
        <Button onClick={() => router.push(page)}>
            <ButtonText>{buttonText}</ButtonText>
        </Button>
    );
}

export default NavbarItem;
