import React, { useState } from "react";
import { Table } from "../../components/Table/Table";
import { TableBody } from "../../components/Table/TableBody";
import { TableCell } from "../../components/Table/TableCell";
import { TableHeader } from "../../components/Table/TableHeader";
import { TableHeaderCell } from "../../components/Table/TableHeaderCell";
import { TableRow } from "../../components/Table/TableRow";

import { tableData } from "../../data/TableData";

function StockConditionPage(props) {

    const [data, setData] = useState(tableData)

    const createTableHeader = (datas) => {

        const dataKey = Object.keys(datas[0])

        if (datas.length == 0) { return 'Error data Length 0 !' }

        else {
            return (
                <TableRow>{
                    dataKey.map((valH, idxH) => (
                        <TableHeaderCell key={idxH}>{valH}</TableHeaderCell>
                    ))}
                </TableRow>)
        }
    }

    const createTableRow = (datas) => {

        if (datas.length == 0) { return 'Error data Length 0 !' }

        else {
            const dataKey = Object.keys(datas[0])

            return (
                datas.map((valR, idxR) =>
                (
                    <TableRow key={idxR}>
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
        <div>
            <Table>
                <TableHeader>
                    {createTableHeader(tableData)}
                </TableHeader>
                <TableBody>
                    {createTableRow(tableData)}
                </TableBody>
            </Table>
        </div>
    )
}

export { StockConditionPage }