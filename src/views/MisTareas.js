import React, { useEffect, useState } from "react";
import { BsTrash } from "react-icons/bs";


const MisTareas = () => {
    const [ todos, setTodos ] = useState( [] )
    const [ currentPage, setCurrentPage ] = useState( 1 )
    const todosPerPage = 3
    const [ showModal, setShowModal ] = useState( false )
    const [ newTodo, setNewTodo ] = useState( '' )

    useEffect( () => {
        const userId = Math.floor( Math.random() * 10 ) + 1
        fetch( `https://jsonplaceholder.typicode.com/todos?userId=${userId}` )
            .then( res => res.json() )
            .then( data => setTodos( data ) )
            .catch( error => console.error( 'There was a problem fetching the To-Dos', error ) )
    }, [] )

    const handleDelete = ( id ) => {
        const newTodos = todos.filter( todo => todo.id !== id );
        setTodos( newTodos );
        // Adjust pagination if last item on the page was removed
        if ( newTodos.length % todosPerPage === 0 && currentPage > 1 ) {
            setCurrentPage( currentPage - 1 );
        }
    };

    const handleAddTodo = ( e ) => {
        e.preventDefault();

        if (!newTodo.title.trim() || !newTodo.text.trim()) {
            alert('Both title and description are required.');
            return;
        }

        const newTodoItem = {
            userId: Math.floor( Math.random() * 10 ) + 1,
            // id: Date.now(), // Using Date.now() for a unique ID
            id: newTodo.title,
            title: newTodo.text,
            completed: false,
            // Assuming 'text' is additional info you want to store
            // text: newTodo.text,
        };
        setTodos( [ newTodoItem, ...todos ] );
        setShowModal( false );
        setNewTodo( { title: '', text: '' } );
        setCurrentPage( 1 ); // Go to the first page to see the newly added todo
    };

    const handleChange = ( e ) => {
        const { name, value } = e.target;
        setNewTodo( prevState => ( {
            ...prevState,
            [ name ]: value,
        } ) );
    };

    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = todos.slice( indexOfFirstTodo, indexOfLastTodo );

    const paginate = ( pageNumber ) => setCurrentPage( pageNumber );

    const totalPages = Math.ceil( todos.length / todosPerPage );
    const pages = Array.from( { length: totalPages }, ( _, i ) => i + 1 );

    return (
        <div>
            <div className="todo-cards">
                {currentTodos.map( todo => (
                    <div key={todo.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">Tarea - {todo.id}</h5>
                            <p className="card-text">{todo.title}</p>
                            <button onClick={() => handleDelete( todo.id )} className="btn trash-btn">
                                <BsTrash />
                            </button>
                        </div>
                    </div>
                ) )}
            </div>
            <button onClick={() => setShowModal( true )} className="btn btn-add-todo">Añadir Tarea</button>

            <div className="pagination">
                {pages.map( number => (
                    <button key={number} onClick={() => paginate( number )} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                        {number}
                    </button>
                ) )}
            </div>

            {showModal && (
                <div className="modal" style={{ display: 'block' }}>
                    <div className="modal-content">
                        <span onClick={() => setShowModal(false)} className="close">&times;</span>
                        <h5 className="modal-title mb-3">Añadir Tarea</h5>
                        <div className="form-group">
                            <form onSubmit={handleAddTodo}>
                                <div>
                                    <label>Nombre</label>
                                    <input
                                        placeholder="Nombre"
                                        className="form-control"
                                        type="text"
                                        name="title"
                                        value={newTodo.title}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="mt-3">Descripción</label>
                                    <textarea
                                        placeholder="Descripción"
                                        className="form-control"
                                        name="text"
                                        maxLength={110}
                                        value={newTodo.text}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="modal-btn-container mt-3">
                                    <button onClick={() => setShowModal(false)}  type="submit" className="btn btn-cancelar">Cancelar</button>
                                    <button type="submit" className="btn btn-guardar">Guardar</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
};


export default MisTareas