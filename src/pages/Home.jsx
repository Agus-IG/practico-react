import { Container, } from "@mui/material"
import PostCard from "../components/PostCard"
import { estilos } from "../Styles"

export const Home = () => {
    return (
    <Container style={estilos.homeContainer} >
    <PostCard/>
    <PostCard/>
    <PostCard/> 
    </Container>
    )
}
