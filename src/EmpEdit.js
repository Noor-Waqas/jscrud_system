import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EmpEdit = () => {
  // const [empdata, empdatachange] = useState({});
  const { empid } = useParams();
  console.log("empid", empid);
  useEffect(() => {
    fetch("http://localhost:3000/students/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        idchange(resp.id);
        namechange(resp.name);
        emailchange(resp.email);
        phonechange(resp.phone);
        countrychange(resp.phone);
        activechange(resp.active);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  const [id, idchange] = useState("");
  const [name, namechange] = useState("");
  const [email, emailchange] = useState("");
  const [phone, phonechange] = useState("");
  const [country, countrychange] = useState("");
  const [homes, homeschange] = useState("");

  const [active, activechange] = useState(true);
  // page refresh handel
  const [validation, validationchange] = useState(false);

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();

    const empdata = { id, name, email, phone, active, country, homes };

    fetch("http://localhost:3000/students/" + empid, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(empdata),
    })
      .then((res) => {
        alert("Save Successfully");
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <>
      <div className="container-fluids mt-5 bg-dark">
        <div className="row">
          <div className="offset-lg-3 col-lg-6 mt-5 mb-5">
            <form
              className="container bg-dark text-light"
              onSubmit={handlesubmit}
            >
              <div className="card" style={{ textAlign: "left" }}>
                <div className="card-title">
                  <h2>Students Update</h2>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>Id</label>
                        <input
                          type="number"
                          value={id}
                          disabled="disabled"
                          class="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>Name</label>
                        <input
                          type="text"
                          required
                          value={name}
                          onMouseDown={(e) => validationchange(true)}
                          onChange={(e) => namechange(e.target.value)}
                          class="form-control"
                          placeholder="Enter Name"
                        />
                        {/* check if the no enter  */}
                        {name.length == 0 && validation && (
                          <span className="text-danger">Enter The Name </span>
                        )}
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          value={email}
                          onChange={(e) => emailchange(e.target.value)}
                          type="email"
                          class="form-control"
                          placeholder="Enter email"
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>Phone</label>
                        <input
                          value={phone}
                          onChange={(e) => phonechange(e.target.value)}
                          type="number"
                          class="form-control"
                          placeholder="Enter Phone Number"
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>Country</label>
                        <input
                          value={country}
                          onChange={(e) => countrychange(e.target.value)}
                          type="text"
                          class="form-control"
                          placeholder="Enter email"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>Home</label>
                        <input
                          value={homes}
                          onChange={(e) => homeschange(e.target.value)}
                          type="text"
                          class="form-control"
                          placeholder="Enter email"
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-check">
                        <imput
                          checked={active}
                          onChange={(e) => activechange(e.target.checked)}
                          className="form-check-input"
                          type="checkbox"
                        ></imput>
                        <label className="form-check-lable">Is Active</label>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group">
                        <button className="btn btn-outline-info m-2 btn-lg form-control">
                          Save
                        </button>
                        <Link
                          className="btn btn-outline-danger form-control"
                          to="/"
                        >
                          Back
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmpEdit;
