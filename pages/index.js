import { Box } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import { data } from "../data/data";
import Container from "../components/Container";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";
import useMediaQuery from "@mui/material/useMediaQuery";

const TextContainer = styled(Box)(({ isMobile }) => ({
    display: "flex",
    flexDirection: "column",
    marginLeft: isMobile ? "7vw" : "30vw",
    marginTop: isMobile ? "11vh" : "12vh",
}));

const GreetingText = styled(Box)(({ isMobile }) => ({
    display: "flex",
    alignItems: "center",
    color: "#51cfb7",
    fontSize: 20,
    marginTop: isMobile ? "1.5rem" : "0px",
}));

const NameText = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    color: "#ccd6f6",
    fontSize: 60,
    fontWeight: "bold",
}));

const SummaryText = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    color: "#8892b0",
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: "2rem",
}));

const DescriptionText = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    color: "#A9B6DD",
    fontSize: 17,
    width: "50%",
    overflowWrap: "break-word",
}));

const IconContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    marginLeft: "30vw",
    marginTop: "2rem",
}));

const Icon = styled(Box)(({ theme }) => ({
    fontSize: 40,
    marginRight: "1rem",
    cursor: "pointer",
    "&:hover": {
        color: "#51cfb7",
    },
}));

export default function Home() {
    const isMobile = useMediaQuery("(max-width:600px)");

    return (
        <Container title={`${data.name} | Portfolio`}>
            <TextContainer isMobile={isMobile}>
                <GreetingText isMobile={isMobile}>Hi, my name is</GreetingText>
                <NameText>{data.name}.</NameText>
                <SummaryText>{data.summary}.</SummaryText>
                <DescriptionText>{data.description}</DescriptionText>
            </TextContainer>
            <IconContainer>
                <Link href={data.github} target="_blank">
                    <Icon>
                        <AiFillGithub></AiFillGithub>
                    </Icon>
                </Link>
                <Link href={data.linkedin} target="_blank">
                    <Icon>
                        <AiFillLinkedin></AiFillLinkedin>
                    </Icon>
                </Link>
            </IconContainer>
        </Container>
    );
}
