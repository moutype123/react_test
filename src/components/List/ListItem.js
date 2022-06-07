import React from "react";
import styled from "styled-components";


const Item = styled.li`
`
function ListItem(props){

    return(<Item>{props.children}</Item>)
}

export {ListItem}