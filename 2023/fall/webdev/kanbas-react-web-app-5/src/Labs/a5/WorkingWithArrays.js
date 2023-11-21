import React, { useState, useEffect } from "react";
import axios from "axios";
function WorkingWithArrays() {
    const [a, setA] = useState(34);
    const [b, setB] = useState(23);

    const API = "http://localhost:4000/a5/todos";
    const [todo, setTodo] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09", completed: false,
    });
    const [todos, setTodos] = useState([]);
    const fetchTodos = async () => {
        const response = await axios.get(API);
        setTodos(response.data);
    };
    const removeTodo = async (todo) => {
        const response = await axios
            .get(`${API}/${todo.id}/delete`);
        setTodos(response.data);
    };
    const fetchTodoById = async (id) => {
        const response = await axios.get(`${API}/${id}`);
        setTodo(response.data);
    };

    const createTodo = async () => {
        const response = await axios.get(`${API}/create`);
        setTodos(response.data);
    };

    const updateTitle = async () => {
        const response = await axios.get(
            `${API}/${todo.id}/title/${todo.title}`);
        setTodos(response.data);
    };
    const postTodo = async () => {
        const response = await axios.post(API, todo);
        setTodos([...todos, response.data]);
    };

    const deleteTodo = async (todo) => {
        try {
            const response = await axios.delete(
                `${API}/${todo.id}`);
            setTodos(todos.filter((t) => t.id !== todo.id));
        } catch (error) {
            console.log(error);
            setErrorMessage(error.response.data.message);
        }
    };

    const updateTodo = async () => {
        try {
            const response = await axios.put(
                `${API}/${todo.id}`, todo);
            setTodos(todos.map((t) => (
                t.id === todo.id ? todo : t)));
            setTodo({});
        } catch (error) {
            console.log(error);
            setErrorMessage(error.response.data.message);
        }
    };

    useEffect(() => {
        fetchTodos();
    }, []);


    const [errorMessage, setErrorMessage] = useState(null);

    return (
        <div>
            <h2>Working with Arrays</h2>

            {errorMessage && (
                    <div className="alert alert-danger mb-2 mt-2">
                        {errorMessage}
                    </div>
            )}
            <textarea
                onChange={(e) => setTodo({
                    ...todo,
                    description: e.target.value
                })}
                value={todo.description} type="text"
            />
            <input
                onChange={(e) => setTodo({
                    ...todo, due: e.target.value
                })}
                value={todo.due} type="date"
            />
            <label>
                <input
                    onChange={(e) => setTodo({
                        ...todo, completed: e.target.checked
                    })}
                    value={todo.completed} type="checkbox"
                />
                Completed
            </label>
            <button onClick={postTodo} >
                Post Todo
            </button>

            <button onClick={updateTodo}>
                Update Todo
            </button>

            <ul className="list-group">



                {todos.map((todo) => (
                    <li key={todo.id} className="list-group-item" style={{ display: "flex", alignItems: "center" }}>
                        <input
                            checked={todo.completed}
                            type="checkbox" readOnly
                            style={{ marginRight: "20px" }}
                        />

                        <div style={{ width: "500px" }}>
                            <p>
                                {todo.title}
                            </p>
                            <p>{todo.description}</p>
                            <p>{todo.due}</p>
                        </div>

                        <div style={{ marginLeft: "20px", gapX: "20px", display: "flex" }}>
                            <button onClick={() => deleteTodo(todo)} className="btn btn-danger float-end" style={{ marginRight: "10px" }} >
                                Delete
                            </button>
                            <button onClick={() => fetchTodoById(todo.id)} className="btn btn-warning me-2 float-end"  >
                                Edit
                            </button>
                        </div>

                    </li>
                ))}
            </ul>


            <input
                onChange={(e) => setA(e.target.value)}
                className="form-control" type="number" value={a} />
            <input
                onChange={(e) => setB(e.target.value)}
                className="form-control" type="number" value={b} />

            <hr />

            <button onClick={updateTitle}
                className="btn btn-success mb-2 w-100">
                Update Title
            </button>

            <button onClick={createTodo}
                className="btn btn-primary mb-2 w-100">
                Create Todo
            </button>

            <ul className="list-group">
                {todos.map((todo) => (
                    <li key={todo.id}
                        className="list-group-item">
                        <button
                            onClick={() => fetchTodoById(todo.id)}
                            className="btn btn-warning me-2 float-end"
                            style={{ marginLeft: "10px" }}
                        >
                            Edit
                        </button>

                        <button
                            // onClick={() => removeTodo(todo)}
                            onClick={() => deleteTodo(todo)}
                            className="btn btn-danger float-end" >
                            Remove
                        </button>
                        {todo.title}
                    </li>
                ))}
            </ul>
        </div>
        //
    );
}
export default WorkingWithArrays;