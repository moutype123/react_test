import React from "react";
import styled from "styled-components";


const StyledTableRow = styled.tr`
    &:hover {

        box-shadow: 10px 5px 5px black;
    }
  
`

function TableRow(props){
    
    return(<StyledTableRow>{props.children}</StyledTableRow>)
}

export {TableRow}