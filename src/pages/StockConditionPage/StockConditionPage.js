import React, { useState } from "react";
import { Table } from "../../components/Table/Table";
import { TableBody } from "../../components/Table/TableBody";
import { TableCell } from "../../components/Table/TableCell";
import { TableHeader } from "../../components/Table/TableHeader";
import { TableHeaderCell } from "../../components/Table/TableHeaderCell";
import { TableRow } from "../../components/Table/TableRow";

import { tableData } from "../../data/TableData";
import { SearchBar } from "../../layouts/SearchBar/SearchBar";
import { Row } from "../../layouts/GridLayout/Row";
import { Col } from "../../layouts/GridLayout/Col";
import { Grid } from "../../layouts/GridLayout/Grid";
import { Paper } from "../../components/Paper/Paper";
import { SelectBar } from "../../layouts/SelectBar/SelectBar";
import { STOCK_CONDITIONS } from "../../data/ConditionList";
import { useQuery } from "@apollo/client";
import CONDITION from "../../query/allQuery";

function StockConditionPage(props) {

    // const [data, setData] = useState(CONDITION['volumeUp'])
    const [selectedItem, setSelectedItem] = useState(0)
    const [condition,setCondition] = useState('volumeUp')
    const [query, setQuery] = useState(CONDITION[condition])
    const {loading, error, data} = useQuery(query)

    const barClickEventHandler = (condition) => {
        setCondition(CONDITION[condition])
    }

    const rowClickEventHandler = (stockName) => {

    }

    const selectEventHandler = (item) => {
        setSelectedItem(item)
    }

    const createTableHeader = (datas) => {

    
        if (datas === undefined || datas.length == 0) { return (<tr><td>No Data!</td></tr>)}

        else {

            const dataKey = Object.keys(datas[condition][0])

            return (
                <tr>{
                    dataKey.map((valH, idxH) => (
                        <TableHeaderCell key={idxH}>{valH}</TableHeaderCell>
                    ))}
                </tr>)
        }
    }

    const createTableRow = (datas) => {

        if (datas === undefined || datas.length == 0) { return (<tr><td>No Data!</td></tr>) }

        else {
            const dataKey = Object.keys(datas[condition][0])

            return (
                datas[condition].map((valR, idxR) =>
                (
                    <TableRow key={idxR} onClick={rowClickEventHandler}>
                        {dataKey.map((valC, idxK) => (
                            <TableCell key={idxK}>{valR[valC]}</TableCell>
                        ))}
                    </TableRow>
                )
                )
            )
        }
    }

    return (
        <div style={{'width': '100%','height': 'calc(100vh - 5rem)','overflow':'hidden', 'margin' : '1.25rem'}}>
        <Grid>
            <Row>
                <Col col={6}>
                    <Paper>
                        <div style={{'height' : '100%','overflow-y':'auto','margin' : '1rem 0','position' : 'relative'}}>
                            <SearchBar data_list={STOCK_CONDITIONS} onClick={barClickEventHandler} />
                            <Table>
                                <TableHeader>
                                    {createTableHeader(data)}
                                </TableHeader>
                                <TableBody>
                                    {createTableRow(data)}
                                </TableBody>
                            </Table>
                        </div>
                    </Paper>
                </Col>
                <Col col={6}>
                    <Paper>
                        <SelectBar items={['stock', 'theme']} selectedItem={selectedItem} onClick={selectEventHandler}></SelectBar>
                    </Paper>
                </Col>
            </Row>
        </Grid>
        </div>
    )
}

export { StockConditionPage }