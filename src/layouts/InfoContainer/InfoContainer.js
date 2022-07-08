import React from "react";
import styled from "styled-components";

const StyledInfoContainer = styled.div`
    margin : 10px; 0px;
`


function InfoContainer(props){

    return(
        <StyledInfoContainer>
            <span>거래량</span>
        </StyledInfoContainer>
    )
}

export {InfoContainer}