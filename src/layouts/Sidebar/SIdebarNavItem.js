import React from "react";
import styled from "styled-components";
import { ListItem } from "../../components/List/ListItem";


const StyledListItem = styled(ListItem)`
    justify-content : flex-start;
`
const StyledSVG = styled.svg`
    width : 1.5rm;
    height: 1.5rm;
`
const StyledItemName = styled.div`
`
const StyledSpan = styled.span`
    inset = 0px;
`

function SidebarNavItem(props){

    return(
        <StyledListItem>
            {/* <StyledSVG/>  */}
            <StyledItemName>{props.children}</StyledItemName>
            <StyledSpan/>
        </StyledListItem>
    )
}

export {SidebarNavItem}