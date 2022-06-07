import React from "react";
import styled from "styled-components";


const Container = styled.div`
    width : 100%;
    height : 100vh;
    margin-left : 250px;
    background-color : #f5f6f8;
`

function PageContainer(props){

    return (<Container>
        {props.children}
    </Container>)
}

export default PageContainer