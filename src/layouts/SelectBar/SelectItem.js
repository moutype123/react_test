import React from "react";
import styled from "styled-components";

const StyledItem = styled.span`
    background-color : white;
    border : 1px solid black;
    border-radius : 0.5rem;
    margin : 0px 10px;
    padding : 5px 10px;
`

const StyledSelcedItem = styled(StyledItem)`
    background-color : blue;
`


function SelectItem(props){

    const itemClickHandler = () => {
        props.onClick(props.children)
    }

    return(<StyledItem onClick={itemClickHandler}>{props.children}</StyledItem>)
}

function SelectedItem(props){

    const itemClickHandler = (item) => {
        props.onClick(props.children)
    }

    return (<StyledSelcedItem onClick={itemClickHandler}>{props.children}</StyledSelcedItem>)
}

export {SelectItem, SelectedItem}