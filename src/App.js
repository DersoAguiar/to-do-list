import React, {useState, useEffect} from "react";
import Todo from "./Todo";
import { db } from './firebase';
import { collection, deleteDoc, doc, onSnapshot, query, updateDoc } from "firebase/firestore";
import TodoForm from "./TodoForm";


const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`,
  container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,  
  count: `text-center p-2`
}

function App() {
  const [todos, setTodos] = useState(['']);
  
 

  // Read todo from firebase

  useEffect(() => {
    const q = query(collection(db, 'todos'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = []
      querySnapshot.forEach((doc) => {
        todosArr.push({...doc.data(), id: doc.id})
      });
      setTodos(todosArr)
    });
    return () => unsubscribe();
  }, []);

  // Update todo in firebase

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, 'todos', todo.id), {
      completed: !todo.completed
    })
  }

  // Delete todo

  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, 'todos', id))
  }


  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>
          Todo App
        </h3>
        <TodoForm />
        <ul>
          {todos.map((todo, index) => (
            <Todo 
            key={index} 
            todo={todo} 
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
                      
          />
          ))}
        </ul>
        {todos.length < 1 ? null : <p className={style.count}>{`You have ${todos.length} todos`}</p>}
        
      </div>
      
    </div>
  );
}

export default App;
