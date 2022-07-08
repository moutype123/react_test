import React from "react";
import { Col } from "../../layouts/GridLayout/Col";
import { Row } from "../../layouts/GridLayout/Row";
import { InfoContainer } from "../../layouts/InfoContainer/InfoContainer";



function StockInfoPage(props){

    return(
        <React.Fragment>
        <Row><Col><InfoContainer/></Col></Row>
        <Row><Col>B</Col></Row>
        <Row><Col>B</Col></Row>
        </React.Fragment>
    )
}

export {StockInfoPage}