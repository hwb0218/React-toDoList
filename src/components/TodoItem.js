import React, {Component} from 'react';
import './TodoItem.css';

class TodoItem extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.props.checked !== nextProps.checked;
    }

    render() {
        const { text, checked, id, onToggle, onRemove } = this.props;
        console.log(id);
        return (
            <div className='todo-item' onClick={() => onToggle(id)}>
                <div className='remove' onClick={(e) => {
                    e.stopPropagation();
                    onRemove(id)}}>❌</div>
                <div className={`todo-text ${checked && 'checked'}`}>
                    <div>{text}</div>
                </div>
                {
                    checked && (<div className='checked-mark'>✔</div>)
                }
            </div>
        );
    }
}

export default TodoItem;