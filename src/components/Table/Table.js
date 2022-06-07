import React from "react";
import styled from "styled-components";


const StyledTable = styled.table`
    background-color : white;
`

function Table(props){

    return(
        <StyledTable>{props.children}</StyledTable>
    )
}

export {Table}