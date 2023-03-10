import React from 'react'
import { Link } from 'react-router-dom';
import { FiCornerDownLeft, FiCheck, FiEdit } from "react-icons/fi";

export function UserEdit({name, surname, email, password}) {
  return (
    <div className="UserEdit">
      <form>
        <h1>UserEdit</h1>
        <FiEdit/>
        <Link to='../users-list'><FiCornerDownLeft/></Link>
        <input type={'text'} placeholder='Name...' className='input'/>
        <input type={'text'} placeholder='Surname...'className='input'/>
        <input type={'email'} placeholder='Email...' className='input'/>
        <input type={'password'} placeholder='Password...' className='input'/>
        <button type={'submit'} className='button--save'>SAVE <FiCheck/></button>
      </form>
    </div>
  );
}