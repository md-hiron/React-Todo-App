import React from "react";
import TableView from "./table-view";
import Listview from "./list-view";

class Todos extends React.Component{
    state ={
        todos: [
            {
                id: 'dafsdfas',
                text:  'todo text',
                description: 'Simple description',
                time: new Date(),
                isComplete: false,
                isSelect: false
            },
            {
                id: 'defsdfas',
                text:  'todo text 2',
                description: 'Simple description 2',
                time: new Date(),
                isComplete: false,
                isSelect: false
            }
        ]
    }

    toggleSelect = () => {

    }

    toggleComplete = () => {

    }

    render(){
        return(
            <div>
                <h1>Hello todos</h1>
                <div>
                <Listview 
                    todos={this.state.todos}
                    toggleSelect={this.toggleSelect}
                    toggleComplete={this.toggleComplete}
                />
                </div>
                <div>
                <TableView 
                    todos={this.state.todos}
                    toggleSelect={this.toggleSelect}
                    toggleComplete={this.toggleComplete}
                />
                </div>
                
            </div>
        )
    }
}

export default Todos