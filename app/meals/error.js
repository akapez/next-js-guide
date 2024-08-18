'use client';

const Error = ({ error }) => {
    return (
        <main className='error'>
            <h1>An error ocurred!</h1>
            <p>Failed to fetch meals data.</p>
        </main>
    );
};

export default Error;