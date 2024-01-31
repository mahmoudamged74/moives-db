import React, { useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import Joi from 'joi';

export default function Login({saveUserData}) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [errorlist, setErrorList] = useState([]);
  const [user, setUser] = useState({
   
    email: '',
    password: ''
  
  });

  function getUserData(e) {
    let myUser={...user}
        myUser[e.target.name]=e.target.value
        setUser(myUser)
  }

  async function sendLoginDataToApi() {
    try {
      const { data } = await axios.post(
        'https://ecommerce.routemisr.com/api/v1/auth/signin',
        user
      );

      if (data.message === 'success') {
        setLoading(false);

        localStorage.setItem('userToken',data.token)
        

        
        saveUserData()
        navigate('/home');
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

    sendLoginDataToApi();
   }
  }
  function validationRigester() {
    let scheme=Joi.object({
      email:Joi.string().email({minDomainSegments:2,tlds:{allow:['com','net']}}).required(),
      password:Joi.string(),
    })
    
    return scheme.validate(user ,{abortEarly:false});
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login page</title>
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

    

        

        <button className="btn btn-info">
          {loading ? <i className="fas fa-spinner fa-spin"></i> : 'Login'}
        </button>
      </form>
    </>
  );
}