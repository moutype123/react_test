import React from "react";
import styled from "styled-components";
import { ListGroup } from "../../components/List/ListGroup";
import { SidebarNavItem } from "./SIdebarNavItem";


const StyledNav = styled(ListGroup)`
`

function SidebarNav(props){
    
    return(
        <StyledNav>
            <SidebarNavItem>Stock Condition</SidebarNavItem>
            <SidebarNavItem>Stock Condition</SidebarNavItem>
            <SidebarNavItem>Stock Condition</SidebarNavItem>
            <SidebarNavItem>Stock Condition</SidebarNavItem>
            <SidebarNavItem>Stock Condition</SidebarNavItem>
        </StyledNav>
    )
}

export {SidebarNav}