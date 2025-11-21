import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

createRoot(document.getElementById('root'))
.render (
    <StrictMode>
        <TodoForm/>
    </StrictMode>
)