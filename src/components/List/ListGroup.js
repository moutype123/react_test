import React from "react";
import styled from "styled-components";


const Container = styled.ul`
`

function ListGroup(props){

    return(
        <Container>{props.children}</Container>
    )

}

export {ListGroup}