import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditCustomer() {
    let navigate=useNavigate()

    const {custId}=useParams();
    const [customer, setCustomers] = useState({custId:'',name:'', email:''});

    const {name, email}=customer;
    console.log(custId);
    console.log(customer.custId);
    
    const onInputChange=(e)=>{
        setCustomers({...customer,[e.target.name]:e.target.value})
    };

    useEffect (()=>{
        loadCustomer();
    },[]);

    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:8080/customer/${custId}`, customer)
        navigate('/')
    };

    const loadCustomer = async ()=> {
        const result = await axios.get(`http://localhost:8080/customer/${custId}`);
        setCustomers(result.data);
    };

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Edit Customer</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className='mb-3'>
                    <label htmlFor='custId' className='form-label'> custId</label>
                    <input type={'text'} 
                      className='form-control' 
                      placeholder='Enter CID' 
                      name='custId' 
                      value={custId}
                      onChange={(e)=>onInputChange(e)}/>
                </div>                
                <div className='mb-3'>
                    <label htmlFor='name' className='form-label'> Name</label>
                    <input type={'text'} 
                      className='form-control' 
                      placeholder='Enter Name' 
                      name='name' 
                      value={name}
                      onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='email' className='form-label'> EMail</label>
                    <input type={'text'} 
                      className='form-control' 
                      placeholder='Enter EMail' 
                      name='email' 
                      value={email}
                      onChange={(e)=>onInputChange(e)}/>
                </div>
                <button type='submit' className='btn btn-outline-primary'>Submit</button>
                <Link className='btn btn-outline-danger' to='/'>Cancel</Link>
                </form>
            </div>
        </div>
    </div>
  )
}
