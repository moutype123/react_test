import React from "react"
import { SidebarContainer } from "./SidebarContainer"

function Sidebar(props){

    return(
        <SidebarContainer>{props.children}</SidebarContainer>
    )
}

export default Sidebar