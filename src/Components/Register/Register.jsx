import React, { useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import Joi from 'joi';

export default function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [errorlist, setErrorList] = useState([]);
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    rePassword: '',
    phone: ''
  });

  function getUserData(e) {
    let myUser={...user}
        myUser[e.target.name]=e.target.value
        setUser(myUser)
  }

  async function sendRegisterDataToApi() {
    try {
      const { data } = await axios.post(
        'https://ecommerce.routemisr.com/api/v1/auth/signup',
        user
      );

      if (data.message === 'success') {
        setLoading(false);
        navigate('login');
      }
    } catch (error) {
      setLoading(false);
      setError(error.response.data.message);
    }
  }

  function submitForm(e) {
    e.preventDefault();
    setLoading(true);
    
   let validation= validationRigester();
   if (validation.error) {
    setLoading(false);
    setErrorList(validation.error.details)

   }else{
    sendRegisterDataToApi();
   }
  }
  function validationRigester() {
    let scheme=Joi.object({
    name: Joi.string().min(3).max(15).required(),
    email:Joi.string().email({minDomainSegments:2,tlds:{allow:['com','net']}}).required(),
    password:Joi.string().pattern(/^([A-Z]|[a-z]|[0-9]| |#|@){4,}/),
    rePassword:Joi.string().pattern(/^([A-Z]|[a-z]|[0-9]| |#|@){4,}/),
    phone:Joi.number().required()

    })
    
    return scheme.validate(user ,{abortEarly:false});
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Register page</title>
      </Helmet>

      {errorlist.map((err,index)=>
      {
        if (err.context.label === 'password') {
          return <div key={index} className="alert alert-danger my-2">password invalid</div>
        }else{
          return <div key={index} className="alert alert-danger my-2">{err.message}</div>
        }
      } )}

      {error && <div className="alert alert-danger my-2">{error}</div>}
      <form onSubmit={submitForm} className="py-5">
        <label htmlFor="name">Name</label>
        <input
          onChange={getUserData}
          type="text"
          className="form-control my-input my-2"
          name="name"
          id="name"
        />

        <label htmlFor="email">Email:</label>
        <input
          onChange={getUserData}
          type="email"
          className="form-control my-input my-2"
          name="email"
          id="email"
        />

        <label htmlFor="password">Password:</label>
        <input
          onChange={getUserData}
          type="password"
          className="form-control my-input my-2"
          name="password"
          id="password"
        />

        <label htmlFor="rePassword">RePassword:</label>
        <input
          onChange={getUserData}
          type="password"
          className="form-control my-input my-2"
          name="rePassword"
          id="rePassword"
        />

        <label htmlFor="phone">Phone:</label>
        <input
          onChange={getUserData}
          type="text"
          className="form-control my-input my-2"
          name="phone"
          id="phone"
        />

        <button className="btn btn-info">
          {loading ? <i className="fas fa-spinner fa-spin"></i> : 'Register'}
        </button>
      </form>
    </>
  );
}