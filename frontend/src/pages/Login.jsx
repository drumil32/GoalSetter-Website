import React, { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa';

function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const onChange = (event) => {
        const { name, value } = event.target;

        setFormData(prevFormData => ({ ...prevFormData, [name]: value }) );
    }

    const onSubmit = (event) => {
        event.preventDefault();
        
    }
    return (
        <>
            <section className="heading">
                <h1>
                    <FaSignInAlt /> Login
                </h1>
                <p>Login and start setting goals</p>
                <section className="form">
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <input 
                                type="email"
                                name="email"
                                value={formData.email}
                                placeholder="Enter your Email"
                                onChange={onChange}
                                className="form-control" 
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="passwod"
                                name="passwod"
                                value={formData.passwod}
                                placeholder="Enter passwod"
                                onChange={onChange}
                                className="form-control" 
                            />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-block">
                                Submit
                            </button>
                        </div>
                    </form>
                </section>
            </section>
        </>
    )
}

export default Login