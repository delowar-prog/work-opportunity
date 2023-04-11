import React from 'react'

const Blogs = () => {
  return (
    <div className='m-3 md:m-20'>
        <div className='question-item'>
            <h1 className='bg-gray-200 py-2 px-10 rounded font-bold text-lg'>1. When should use context api in react?</h1>
            <p className='text-lg text-justify px-2 md:px-10 py-4'><strong>Use of Context API : </strong><br></br>
            When we need to manage a state globally we use Context API. It can be used together with the useState Hooks to share state between deeply nested components. That means when you create a context into a parent component and pass a state as value, the whole nested child components can access the state directly.  And also to avoid props drillings, facilitate cross-component communication, handle dynamic localization we use context api.
            </p>
        </div>
        <div className='question-item'>
            <h1 className='bg-gray-200 py-2 px-10 rounded font-bold text-lg'>2. What is custom hooks in react?</h1>
            <p className='text-lg text-justify px-2 md:px-10 py-4'><strong>Custom hooks : </strong><br></br>
            A custom hook is a special  reusable function whose name starts with 'use' and which can be used to call other hooks if needed. Custom hooks includes some pieces of logic and access them from multiple components.
            </p>
        </div>
        <div className='question-item'>
            <h1 className='bg-gray-200 py-2 px-10 rounded font-bold text-lg'>3. What is useRef in react?</h1>
            <p className='text-lg text-justify px-2 md:px-10 py-4'><strong>userRef Hooks : </strong><br></br>
            useRef is a react hook which is mainly used to manipulate the DOM directly, such as reading & modifying the value of input field, store and manage state. useRef returns a mutable reference object which has a .current property that can be used to access and modify the current value of the ref.
            </p>
        </div>
        <div className='question-item'>
            <h1 className='bg-gray-200 py-2 px-10 rounded font-bold text-lg'>4. What is useMemo in react?</h1>
            <p className='text-lg text-justify px-2 md:px-10 py-4'><strong>useMemo: </strong><br></br>
            useMemo is a react hook that accepts 2 arguments as the 1st argument is a function that memorizes & computes the results and the 2nd argument is an array of dependencies. If any dependencies change, the memoized value will be recalculated otherwise, the memoized value will be returned directly without recalculating.
            </p>
        </div>
    </div>
  )
}

export default Blogs