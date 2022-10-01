
import React from "react";
import {
    ListGroup,
    ListGroupItem
} from "reactstrap";

const Food = ({ id, foods }) => {
    return (
        <ul>
            <ListGroup>
                <ListGroupItem>{foods}</ListGroupItem>
            </ListGroup>
        </ul>
    )
}
export default Food;
