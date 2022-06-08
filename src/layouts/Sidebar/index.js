import React from "react"
import { Button } from "../../components/Button/Button"
import { SidebarContainer } from "./SidebarContainer"

function Sidebar(props){

    return(
        <SidebarContainer>
            <div>
                <Button>토글</Button>
            </div>
            
            {props.children}
            </SidebarContainer>
    )
}

export default Sidebar