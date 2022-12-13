import React, { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa';

function Register() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const onChange = (event) => {
        const { name, value } = event.target;

        setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
    }

    const onSubmit = (event) => {
        event.preventDefault();

    }
    return (
        <>
            <section className="heading">
                <h1>
                    <FaUser /> Register
                </h1>
                <p>Please create a new account</p>
            </section>
            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            placeholder="Enter your name"
                            onChange={onChange}
                            className="form-control"
                        />
                    </div>
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
                        <input
                            type="email"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            placeholder="Enter confirmPassword"
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

        </>
    )
}

export default Register