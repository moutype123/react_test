import React from "react";
import styled from "styled-components";

const Container = styled.div`
    position:fixed;
    top : 0;
    width : 100%;
    height : 2.5rem;
    position : sticky;
    background-color : #fff;    
`

function HeaderContainer(props){

    return(
        <Container>
            {props.children}
        </Container>    
    )
}

export {HeaderContainer}