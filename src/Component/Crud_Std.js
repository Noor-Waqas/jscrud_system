import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Crud_Std = () => {
  const navigate = useNavigate();
  //*******************Details  Button Start**********************************************

  const DetailsButtons = (id) => {
    navigate("/student/details/" + id);
  };

  //*******************Edit Button Start**********************************************

  const EditsButtons = (id) => {
    navigate("/student/edit/" + id);
  };

  //*******************Remove Button Start************************************************
  //**************************************************************************************
  const DeleteButtons = (id) => {
    // confirm("Are You Sure Do You Want To Removed This Recored?");
    fetch("http://localhost:3000/students/" + id, {
      method: "DELETE",
    }).then((result) => {
      alert("Removed Successfully");
      result.json().then((rest) => {
        // console.log(rest);
        getApiData();
      });
    });
  };
  //*******************Remove Button closed************************************************
  //**************************************************************************************

  //*******************Main Function Api fetch********************************************
  const [empdata, empdatachage] = useState(null);
  const getApiData = async () => {
    const response = await fetch("http://localhost:3000/students").then(
      (response) => response.json()
    );
    empdatachage(response);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      <div className="container mt-5 bg-dark">
        <div className="card bg-success">
          <div className="card-title">
            <h1>Add Students</h1>
          </div>

          <div className="card-body">
            <div>
              <Link
                to="student/create"
                className="btn btn-outline-danger form-control"
              >
                Add New
              </Link>
            </div>

            <div>
              <b>
                <h1 className="display-1">Students Record</h1>
              </b>
            </div>
          </div>
          {/* table container */}
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="table table-dark  table-bordered table-hover mt-5 ms-3">
                  <thead className="bg-dark text-white">
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th> Email</th>
                      <th>Phone</th>
                      <th>Country</th>
                      <th>Homes Address</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/********************data enter in table******************************************* */}

                    {empdata?.length > 1 &&
                      empdata?.map((item) => (
                        <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>{item.name}</td>
                          <td>{item.email}</td>
                          <td>{item.phone}</td>
                          <td>{item.country}</td>
                          <td>{item.homes}</td>

                          <td>
                            {/* Edit button */}
                            <a
                              onClick={() => {
                                EditsButtons(item.id);
                              }}
                              className="btn btn-info m-1 btn-lg form-control"
                            >
                              Edit
                            </a>

                            {/* Remove button */}
                            <a
                              onClick={() => {
                                DeleteButtons(item.id);
                              }}
                              className="btn btn-light m-1 btn-lg form-control"
                            >
                              Remove
                            </a>

                            {/* Details button */}
                            <a
                              onClick={() => {
                                DetailsButtons(item?.id);
                              }}
                              className="btn btn-success m-1 btn-lg form-control"
                            >
                              Details
                            </a>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Crud_Std;
