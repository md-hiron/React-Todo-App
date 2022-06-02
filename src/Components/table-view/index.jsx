import React from "react";
import {Input, Button, Table} from 'reactstrap';
import PropTypes from 'prop-types';

const RowItem = ({todo, toggleSelect, toggleComplete}) => (
    <tr>
        <td scope="row">
            <Input 
                type="checkbox"
                id={todo.id}
                checked={todo.isSelect}
                onChange ={()=> toggleSelect(todo.id)}
            />
        </td>
        <td>
            {todo.time.toDateString()}
        </td>
        <td>
            <h3>{todo.text}</h3>
        </td>
        <td>
            <Button 
                className="ml-auto"
                color={todo.iscomplete ? "success" : "danger"}
                onClick={() => toggleComplete(todo.id)}
            >
                {todo.iscomplete ? "Completed" : "Running"}
            </Button>
        </td>
    </tr>
);

RowItem.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired
}


const TableView = ({todos, toggleSelect, toggleComplete}) => (
    <Table>
        <thead>
            <tr>
                <th>#</th>
                <th>Time</th>
                <th>Todo</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {todos.map(todo => (
                <RowItem
                    key={todo.id}
                    todo={todo}
                    toggleSelect={toggleSelect}
                    toggleComplete={toggleComplete}
                />
            ) )}
        </tbody>
    </Table>
)


TableView.propTypes = {
    todos: PropTypes.array.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired
}

export default TableView