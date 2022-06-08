import React from "react";
import styled from "styled-components";


const StyledList = styled.ul`
    margin : 0px;
    padding: 0px;
`

function ListGroup(props){

    return(
        <StyledList>{props.children}</StyledList>
    )

}

export {ListGroup}