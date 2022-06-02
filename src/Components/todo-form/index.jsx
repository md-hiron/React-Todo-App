import React from "react";
import {Form, FormGroup, Input, Label, Button} from 'reactstrap';
import PropTypes from 'prop-types';

class TodoForm extends React.Component{
    state = {
        text: '',
        description: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event =>{
        event.preventDefault();
        this.props.createTodo(this.state);
        event.target.reset();
        this.setState({
            text: '',
            description: ''
        })
    }

    render(){
        return(
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label>Enter task</Label>
                    <Input
                        placeholder="Task Name"
                        name="text"
                        value={this.state.text}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Enter task</Label>
                    <Input
                        type='textarea'
                        placeholder="Task Name"
                        name="description"
                        value={this.state.description}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <Button type="submit">Create Task</Button>
            </Form>
        )
    }
}

TodoForm.propTypes = {
    createTodo: PropTypes.func.isRequired
}