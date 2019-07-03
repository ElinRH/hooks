import React, { useState, useEffect } from 'react';
import { useForm } from './useForm';
import { Hello } from './Hello';
// useEffect replace componentDidMount and ComponentWillUnmount
const App = () => {
  const [count, setCount] = useState(() => 10);
  const [values, handleChange] = useForm({ firstName: '', password: '' });
  const [show, setShow] = useState(true);
  useEffect(() => {
    const onMouseMove = e => {
      console.log(e, 'on mouse move')
    }
    window.addEventListener('mousemove', onMouseMove);
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
    }
  });
  
  const handleToggle = () => {
    setShow(!show)
  }
  useEffect(() => console.log('mount one'))
  useEffect(() => console.log('mount 2 '))
  return (
    <div>
      <button onClick={handleToggle}>
        Toggle
      </button>
      {show && <h1>See hello <Hello /></h1>}
      <button onClick={() => setCount((currentCount) => {
        if (currentCount > 10) {
          return currentCount * 100
        }
        return 10/2;
      })}>+</button>
      {count} <br/>
      <input name='firstName' type='text' value={values.firstName} onChange={handleChange} />
      <input name='password' type='password' value={values.password} onChange={handleChange} />
    </div>
  )
}

export default App;