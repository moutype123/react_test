import React, { useRef } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
    position : sticky;
    top : 0px;
    width : 100%;
    height : 3rem;
    text-align : center;
    z-index : 100;
    background-color : #fff;
    
`

const StyledSearchBar = styled.input`
    margin : 0 auto;
    width : 60%;
    height : 2em;
    border : 0px;
    border-bottom : 1px solid black;
    text-align : center;
    &:focus {
        outline : none;
    }
    
`

function SearchBar(props) {

    const inputBox = useRef(null)

    const makeDataList = () => {
        return (
            <datalist id='data_list'>
                {props.data_list == [] ? {} : props.data_list.map((val, idx) => (<option key={idx} value={val} />))}
            </datalist>
        )
    }

    const onChangeHandler = () => {
        
        const text = inputBox.current.text
        
        if (text in props.data_list) {
            props.onClick(text)
        }

    }

    return (
        <StyledContainer ref={inputBox} onChange={onChangeHandler}>
            <StyledSearchBar list='data_list' type='text' />
            {makeDataList()}
        </StyledContainer>
    )
}

export { SearchBar }