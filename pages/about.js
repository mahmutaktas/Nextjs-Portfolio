import { Box } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import { data } from "../data/data";
import Container from "../components/Container";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";
import useMediaQuery from "@mui/material/useMediaQuery";

const PageContainer = styled(Box)(({ isMobile }) => ({
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    marginLeft: isMobile ? "0px" : "10vw",
    marginTop: isMobile ? "11vh" : "12vh",
    justifyContent: isMobile ? "center" : "flex-start",
    marginBottom: isMobile ? "3rem" : "0px",
}));

const ImageContainer = styled(Box)(({ isMobile }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: isMobile ? "center" : "flex-start",
    alignItems: isMobile ? "center" : "flex-start",
}));

const TextContainer = styled(Box)(({ isMobile }) => ({
    display: "flex",
    flexDirection: "column",
    marginLeft: isMobile ? "0px" : "2rem",
    justifyContent: isMobile ? "center" : "flex-start",
    alignItems: isMobile ? "center" : "flex-start",
}));

const NameText = styled(Box)(({ isMobile }) => ({
    color: "#51cfb7",
    fontSize: isMobile ? 35 : 40,
    fontWeight: "bold",
    lineHeight: "30px",
    marginBottom: "0.5rem",
}));

const TitleText = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    color: "#8892b0",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: "1rem",
}));

const DescriptionText = styled(Box)(({ isMobile }) => ({
    display: "flex",
    alignItems: "center",
    color: "#A9B6DD",
    fontSize: 16,
    width: isMobile ? "80%" : "50%",
    whiteSpace: "pre-line",
}));

const IconContainer = styled(Box)(({ isMobile }) => ({
    display: "flex",
    marginTop: "1rem",
    justifyContent: isMobile ? "center" : "flex-start",
}));

const Icon = styled(Box)(({ theme }) => ({
    fontSize: 40,
    marginRight: "1rem",
    cursor: "pointer",
    "&:hover": {
        color: "#51cfb7",
    },
}));

export default function About() {
    const isMobile = useMediaQuery("(max-width:600px)");

    return (
        <Container title={`${data.name} | About`}>
            <PageContainer isMobile={isMobile}>
                <ImageContainer isMobile={isMobile}>
                    <img
                        src={`/images/${data.images.profile_picture}`}
                        alt={"profile picture"}
                        width={300}
                        height={300}
                        style={{ borderRadius: 4 }}
                    />
                    <IconContainer isMobile={isMobile}>
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
                </ImageContainer>
                <TextContainer isMobile={isMobile}>
                    <NameText isMobile={isMobile}>{data.name}</NameText>
                    <TitleText>{data.title}</TitleText>
                    <DescriptionText isMobile={isMobile}>{data.long_description}</DescriptionText>
                </TextContainer>
            </PageContainer>
        </Container>
    );
}
