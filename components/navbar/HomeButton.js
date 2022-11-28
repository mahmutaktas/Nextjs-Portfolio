import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import { data } from "../../data/data";
import { useRouter } from "next/router";

const Button = styled(Box)(({ theme }) => ({
    width: 50,
    height: 50,
    borderRadius: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #51cfb7",
    cursor: "pointer",
    color: "#51cfb7",

    "&:hover": {
        backgroundColor: "#51cfb7",
        color: "white",
    },

    "&:active": {
        backgroundColor: "#3A9785",
        color: "white",
    },
}));

const ButtonText = styled(Typography)(({ theme }) => ({
    textAlign: "center",
    fontWeight: "bold",
    letterSpacing: 0.1,
    fontSize: 20,
    userSelect: "none",
}));

function HomeButton() {
    const router = useRouter();
    const buttonText = useState(data.name.split(" ")[0][0] + data.name.split(" ")[1][0]);

    return (
        <Button onClick={() => router.push("/")}>
            <ButtonText>{buttonText}</ButtonText>
        </Button>
    );
}

export default HomeButton;
