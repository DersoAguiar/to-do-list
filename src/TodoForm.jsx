import React, { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore';
import { db } from './firebase';
import { AiOutlinePlus } from 'react-icons/ai';

const style = {    
    form: `flex justify-between`,
    input: `border p-2 w-full text-xl`,
    button: `border p-4 ml-2 bg-purple-500 text-slate-100`,
   
  }

const TodoForm = () => {
    const [input, setInput] = useState('');
  

  // Create Todo

  const createTodo = async (e) => {
    e.preventDefault(e) //para não perder os dados ao atualizar a página
    if (input === '') {
      alert('Ops! Não é possível adicionar um item vazio')
      return
    }
    await addDoc(collection(db, 'todos'), {
      text: input,
      completed: false,
    })
    setInput('')
  }
  
  return (
    <div>
        <form onSubmit={createTodo} className={style.form}>
          <input 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          className={style.input} 
          type="text" 
          placeholder="Add Todo"/>
          <button className={style.button}><AiOutlinePlus size={30}/></button>
        </form>
    </div>
  )
}

export default TodoForm