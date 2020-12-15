import React, {Component} from 'react';
import './TodoListTemplate.css';

const TodoListTemplate = ({form, children}) => {
    return (
        <main className="todo-list-template">
            <div className="title">
                오늘 할 일
            </div>
            <section className="form-wrapper">
                { form }
            </section>
            <section className="todos-wrapper">
                { children }
            </section>
        </main>
    );
}
// 함수형 컴포넌트의 파라미터로 받게 되는 것은 props 인데 비구조화 할당을 하여
// (props) => {} 형태를 ({form, children}) => {} 형태로 만듦
export default TodoListTemplate;