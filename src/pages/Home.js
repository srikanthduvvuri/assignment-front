import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function Home() {

    const [customers,setCustomers] = useState([]);

    const {id} = useParams()

    useEffect(()=>{
        loadCustomers();
        console.log('loading page ....')
    },[]);

    const loadCustomers=async()=>{
        const result = await axios.get('http://localhost:8080/customers');
        setCustomers(result.data);
    };

    const deleteCustomer = async (id) => {
        await axios.delete(`http://localhost:8080/customer/${id}`);
        loadCustomers();
    }

  return (
    <div className='container'>
        <div className='py-4'>
        <table className="table border shadow">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    customers.map((customer, index)=>(
                        <tr>
                        <th scope="row" key={index}>{index+1}</th>
                        <td>{customer.custId}</td>
                        <td>{customer.name}</td>
                        <td>{customer.email}</td>
                        <td>
                            <Link className='btn btn-primary mx-2' to={`/viewcustomer/${customer.custId}`}>View</Link>
                            <Link className='btn btn-outline-primary mx-2'
                                to={`/editcustomer/${customer.custId}`}
                            >Edit</Link>
                        </td>
                    </tr>
                    ))
                }

            </tbody>
        </table>
        </div>
    </div>
  )
}
