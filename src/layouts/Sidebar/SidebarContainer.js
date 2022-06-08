import styled from "styled-components"
import React, { useState } from "react"
import {SidebarToggle} from './SidebarToggle'
import { SidebarNav } from "./SIdebarNav"

const StyledSidebarC= styled.div`   
    width: ${props => props.isOpen? '250px;' : 'auto;' }
    margin : 0;
    padding: 0;
    left : 0;
    height : 100%;
    background-color : #fff;
    // background-color : black;
`

function SidebarContainer(props){

    const [isOpen,setIsOpen] = useState(true)

    const toggleHandler = () => {setIsOpen(!isOpen)}

    return(
        <StyledSidebarC isOpen={isOpen}>
            <SidebarToggle toggleHandler={toggleHandler}/>
            {isOpen &&<SidebarNav/>}
        </StyledSidebarC>
    )
}

export {SidebarContainer}