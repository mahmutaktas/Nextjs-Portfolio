import { Box } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import { data } from "../data/data";
import Container from "../components/Container";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

const PageContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    marginLeft: "10vw",
    marginTop: "5vh",
}));

const ImageContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
}));

const TextContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    marginLeft: "2rem",
}));

const NameText = styled(Box)(({ theme }) => ({
    color: "#51cfb7",
    fontSize: 40,
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

const DescriptionText = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    color: "#A9B6DD",
    fontSize: 16,
    width: "50%",
    whiteSpace: "pre-line",
}));

const IconContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    marginTop: "1rem",
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
    return (
        <Container title={`${data.name} | About`}>
            <PageContainer>
                <ImageContainer>
                    <Image
                        src={`/images/${data.images.profile_picture}`}
                        srcSet={`/images/${data.images.profile_picture}`}
                        alt={"profile picture"}
                        width={300}
                        height={300}
                    />
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
                </ImageContainer>
                <TextContainer>
                    <NameText>{data.name}</NameText>
                    <TitleText>{data.title}</TitleText>
                    <DescriptionText>{data.long_description}</DescriptionText>
                </TextContainer>
            </PageContainer>
        </Container>
    );
}
