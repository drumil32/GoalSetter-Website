import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import {toast} from 'react-toastify';
import {useSelector,useDispatch} from 'react-redux';
import {register,reset} from '../features/auth/authSlice';

function Register() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user,isLoading,isError,isSuccess,message} = useSelector(state=>state.auth);

    useEffect(()=>{
        if( isError ){
            toast.error(message);
        }
        if( isSuccess && user ){
            navigate('/');
        }
        dispatch(reset());
    },[isError,isSuccess,user,message,navigate])


    const onChange = (event) => {
        const { name, value } = event.target;

        setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if( formData.password !== formData.confirmPassword ){
            toast.error('password is not match');
        }else{
            const userData = {
                name : formData.name,
                email : formData.email,
                password : formData.password
            };
            dispatch(register(userData));
        }
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
                            required
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
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            placeholder="Enter confirmPassword"
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

        </>
    )
}

export default Register