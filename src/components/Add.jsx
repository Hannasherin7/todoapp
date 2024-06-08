import React from 'react'
import { Nav } from './Nav'

export const Add = () => {
  return (
    <div>
        <h1><center>ADD TODO</center></h1>
        <Nav></Nav>
         <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" className="form-label">user name</label>
                        <input type="text" className="form-control"></input>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" className="form-label">mobile no</label>
                        <input type="text" className="form-control"></input>
                    </div>
                    
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" className="form-label">user id </label>
                        <input type="text" className="form-control"></input>
                    </div>
                    <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" className="form-label">email id </label>
                        <input type="text" className="form-control"></input>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" className="form-label">title</label>
                        <textarea name="" id="" className="form-control"></textarea>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" className="form-label">status</label>
                        <select name="" id="" className="form-control">
                        <option value="A+">--select--</option>
                            <option value="A+">true</option>
                            <option value="A-">false</option>
                        </select>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" className="form-label">password</label>
                        <input type="password" name="" id="" class="form-control"></input>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" className="form-label">confirm password</label>
                        <input type="password" name="" id="" class="form-control"></input>
                    </div>

                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button className="btn btn-success">Add</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
