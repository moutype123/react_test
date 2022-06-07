import styled from "styled-components"
import React from "react"

const Container = styled.div`
    position : fixed;
    margin : 0;
    padding: 0;
    left : 0;      
    width : 250px;
    height : 100%;
    background-color : black;
`

function SidebarContainer(props){

    return(
        <Container>
            {props.children} 
        </Container>
    )
}

export {SidebarContainer}