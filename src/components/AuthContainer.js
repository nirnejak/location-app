import React from 'react';

export default function AuthContainer(props) {
    return (
        <div className="card text-center p-30">
            <h2>Login</h2>
            {props.children}
        </div>
    )
}