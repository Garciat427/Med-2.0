import React from "react";

function TableRow(props) {
    return (
        <tr>
            <td>{props.city}</td>
            <td>{props.name}</td>
            <td>{props.percentage}</td>
        </tr>
    );
}
export default TableRow;