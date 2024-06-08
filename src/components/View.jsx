import React, { useEffect, useState } from 'react'
import { Nav } from './Nav'
import axios from 'axios'

export const View = () => {
    const [todos,changeTodos]=useState([])
    const fetchData=()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos").then(
            (response)=>{
                changeTodos(response.data)
            }
        ).catch().finally()

    
    }
    useEffect(()=>{fetchData()},[])
  return (
    <div>
        <h1><center>View all</center></h1>
        <Nav></Nav>
         <div class="container">
        <div class="row g-3">
            <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table" border="1">
                    <thead>
                      <tr>
                        <th scope="col">user id</th>
                        <th scope="col">id</th>
                        <th scope="col">title</th>
                        <th scope="col">completed</th>
                      </tr>
                    </thead>
                    
                    {todos.map(
                        (value,index)=>
                            {
                                return <tbody>
                                <tr>
                                  <td>{value.userId}</td>
                                  <td>{value.id}</td>
                                  <td>{value.title}</td>
                                  <td>{value.completed}</td>
                                </tr>
                                </tbody>
                            }
                    )}
                  </table>
            </div>
        </div>
    </div>

    </div>
  )
}
