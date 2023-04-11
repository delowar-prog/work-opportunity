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
            <p className='text-lg text-justify px-2 md:px-10 py-4'><strong>Use of Context API : </strong><br></br>
            When we need to manage a state globally we use Context API. It can be used together with the useState Hooks to share state between deeply nested components. That means when you create a context into a parent component and pass a state as value, the whole nested child components can access the state directly.  And also to avoid props drillings, facilitate cross-component communication, handle dynamic localization we use context api.
            </p>
        </div>
        <div className='question-item'>
            <h1 className='bg-gray-200 py-2 px-10 rounded font-bold text-lg'>4. When should use context api in react?</h1>
            <p className='text-lg text-justify px-2 md:px-10 py-4'><strong>Use of Context API : </strong><br></br>
            When we need to manage a state globally we use Context API. It can be used together with the useState Hooks to share state between deeply nested components. That means when you create a context into a parent component and pass a state as value, the whole nested child components can access the state directly.  And also to avoid props drillings, facilitate cross-component communication, handle dynamic localization we use context api.
            </p>
        </div>
    </div>
  )
}

export default Blogs