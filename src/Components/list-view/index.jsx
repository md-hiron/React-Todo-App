import { Tooltip } from "bootstrap";
import React from "react";
import {ListGroup, ListGroupItem, Input, Button } from "reactstrap";
import PropTypes from 'prop-types';

const ListItem = ({todo, toggleSelect, toggleComplete})=> {
    return (
        <ListGroupItem className="d-flex align-items-center">
            <Input 
                type="checkbox"
                id={todo.id}
                checked={todo.isSelect}
                onChange ={()=> toggleSelect(todo.id)}
            />
            <div className="mx-3">
                <h3>{todo.text}</h3>
                <p>{todo.time.toDateString()}</p>
            </div>
            <Button 
                className="ml-auto"
                color={todo.iscomplete ? "success" : "danger"}
                onClick={() => toggleComplete(todo.id)}
            >
                {todo.iscomplete ? "Completed" : "Running"}
            </Button>
        </ListGroupItem>
    )
}

ListItem.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired
}


const Listview = ({todos, toggleSelect, toggleComplete}) => (
    <ListGroup>
        {todos.map(todo => (
            <ListItem 
                key={todo.id}
                todo={todo}
                toggleSelect={toggleSelect}
                toggleComplete={toggleComplete}

            />
        ))}
    </ListGroup>
)

Listview.propTypes = {
    todos: PropTypes.array.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired
}

export default Listview