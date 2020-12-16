import React, {Component} from 'react';
import TodoListTemplate from "./components/TodoListTemplate";
import Form from "./components/Form";
import Palette from "./components/palette";
import TodoItemList from "./components/TodoItemList";

const colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];

class App extends Component {
    id = 3;

    state = {
        input: '',
        todos: [
            { id: 0, text: ' 리액트 소개', checked: false },
            { id: 1, text: ' 리액트 소개', checked: true },
            { id: 2, text: ' 리액트 소개', checked: false },
        ],
        color: '#343a40'
    }

    handleChange = (e) => {
        this.setState({
           input: e.target.value
        });
    }

    handleCreate = () => {
        const { input, todos, color } = this.state;
        this.setState({
            input: '',
            todos: todos.concat({
                id: this.id++,
                text: input,
                checked: false,
                color
            }),
        });
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter') {
          this.handleCreate();
        }
    }

    // 체크 on / off
    handleToggle = (id) => {
        const { todos } = this.state;

        const index = todos.findIndex(todo => todo.id === id);
        const selected = todos[index];

        const nextTodos = [...todos];

        // todos 배열을 복사한 nextTodos 에 해당하는 인덱스의 요소를 교체한다.
        // checked 값만 바뀜
        nextTodos[index] = {
            ...selected,
            checked: !selected.checked
        }

        this.setState({
           todos: nextTodos
        });
    }

    // item 제거
    handleRemove = (id) => {
        const { todos } = this.state;
        this.setState({
            todos: todos.filter(todo => todo.id !== id)
        });
    }

    handleSelectColor = (color) => {
        this.setState({
            color
        });
    }

    render() {
        const { input, todos, color } = this.state;
        const {
            handleChange,
            handleCreate,
            handleKeyPress,
            handleToggle,
            handleRemove,
            handleSelectColor
        } = this;
        return (
            <TodoListTemplate form={(
                <Form
                    value={input}
                    onKeyPress={handleKeyPress}
                    onChange={handleChange}
                    onCreate={handleCreate}
                    color={color}
                />
            )} palette={<Palette colors={colors} selected={color} onSelect={handleSelectColor}/>}>
                <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
            </TodoListTemplate>
        );
    }
}

export default App;
