import React from 'react'

export function SignUp() {
  return (
    <div className="SignUp">
      <h1>SignUp</h1>
      <form>
        <input type={'text'} placeholder='Name...'/>
        <input type={'text'} placeholder='Surname...'/>
        <input type={'email'} placeholder='Email...' className='input'/>
        <input type={'password'} placeholder='Password...'/>
        <button type={'submit'} className='button--continue'>CONTINUE</button>
        <section className='LogIn'>
        <p>or <a href='#'>LogIn</a></p>
      </section>
      </form>
    </div>
  );
}