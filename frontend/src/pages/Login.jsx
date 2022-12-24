import React, { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../features/auth/authSlice';

function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });


    const dispatch = useDispatch();

    const { user, isLoading, isSuccess, message } = useSelector(state => state.auth);

    const onChange = (event) => {
        const { name, value } = event.target;

        setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if ('' === formData.email || '' === formData.password) {
            toast.error('email and password are required');
        } else {
            const userData = {
                email: formData.email,
                password: formData.password
            };
            dispatch(login(userData));
        }
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
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                placeholder="Enter password"
                                onChange={onChange}
                                className="form-control"
                                required
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