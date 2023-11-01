import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const EmpDetails = () => {
  const [empdata, empdatachange] = useState({});
  const { empid } = useParams();
  console.log("empid");
  useEffect(() => {
    fetch("http://localhost:3000/students/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        empdatachange(resp);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  return (
    <div className="container mt-5 bg-dark text-light border">
      <h1>Students All Details</h1>
      {empdata && (
        <div>
          <h2>
            Students Name is: <b>{empdata.name}</b> ({empdata.id} )
          </h2>
          <h2>Contect Details</h2>
          <h5>Email Details : {empdata.email}</h5>
          <h5>Phone Details : {empdata.phone}</h5>
          <h5>Country Details : {empdata.country}</h5>
          <h5>Homes Details : {empdata.homes}</h5>

          <Link to="/" className="btn btn-info form-control mb-4 mt-4">
            Back to Home
          </Link>
        </div>
      )}
    </div>
  );
};

export default EmpDetails;
