import React from "react";
import styled from "styled-components";


const StyledTableHeader = styled.thead`
    vertical-align : middle;
`

function TableHeader(props){
    return(
        <StyledTableHeader>{props.children}</StyledTableHeader>
    )
}

export {TableHeader}