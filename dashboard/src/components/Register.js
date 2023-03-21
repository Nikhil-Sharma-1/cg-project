import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { adddata } from "./context/ContextProvider";

const Register = () => {
  const { udata, setUdata } = useContext(adddata);

  const navigate = useNavigate("");

  const [inpval, setINP] = useState({
    status: "",
    name: "",
    queued: "",
    scanning: "",
    finished: "",
    type: "",
    rule: "",
    path: "",
    pos: "",
    desc: "",
    severity: "",
  });

  const setdata = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setINP((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  //Sending data from frontend->backend via fetch api
  const addInpData = async (e) => {
    e.preventDefault();

    const {
      status,
      name,
      queued,
      scanning,
      finished,
      type,
      rule,
      path,
      pos,
      desc,
      severity,
    } = inpval;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status,
        name,
        queued,
        scanning,
        finished,
        type,
        rule,
        path,
        pos,
        desc,
        severity,
      }),
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      alert("Error");
      console.log("Error");
    } else {
      navigate("/");
      setUdata(data);
      console.log("Data has been added");
    }
  };

  return (
    <div className="container">
      <form className="mt-5">
        <div className="row">
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputEmail1" className="form-label">
              <b>Status</b>
            </label>
            <br />
            <select
              name="status"
              value={inpval.status}
              onChange={setdata}
            >
              <option value="" disabled selected hidden>
                Choose An Option
              </option>
              <option value="Queued">Queued</option>
              <option value="In Progress">In Progress</option>
              <option value="Success">Success</option>
              <option value="Failed">Failed</option>
            </select>
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label className="form-label">
              <b>Repository Name</b>
            </label>
            <input
              type="text"
              value={inpval.name}
              onChange={setdata}
              name="name"
              className="form-control"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label className="form-label">
              <b>Queued At</b>
            </label>
            <input
              type="datetime-local"
              value={inpval.queued}
              onChange={setdata}
              name="queued"
              className="form-control"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label className="form-label">
              <b>Scanning At</b>
            </label>
            <input
              type="datetime-local"
              value={inpval.scanning}
              onChange={setdata}
              name="scanning"
              className="form-control"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label className="form-label">
              <b>Finished At</b>
            </label>
            <input
              type="datetime-local"
              value={inpval.finished}
              onChange={setdata}
              name="finished"
              className="form-control"
            />
          </div>

          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label className="form-label">
              <b>Type</b>
            </label>
            <input
              type="text"
              value={inpval.type}
              onChange={setdata}
              name="type"
              className="form-control"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label className="form-label">
              <b>Rule ID</b>
            </label>
            <input
              type="text"
              value={inpval.rule}
              onChange={setdata}
              name="rule"
              className="form-control"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label className="form-label">
              <b>Path</b>
            </label>
            <input
              type="text"
              value={inpval.path}
              onChange={setdata}
              name="path"
              className="form-control"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label className="form-label">
              <b>Position</b>
            </label>
            <input
              type="text"
              value={inpval.pos}
              onChange={setdata}
              name="pos"
              className="form-control"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label className="form-label">
              <b>Description</b>
            </label>
            <input
              type="text"
              value={inpval.desc}
              onChange={setdata}
              name="desc"
              className="form-control"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label className="form-label">
              <b>Severity</b>
            </label>
            <input
              type="text"
              value={inpval.severity}
              onChange={setdata}
              name="severity"
              className="form-control"
            />
          </div>

          <button
            type="submit"
            onClick={addInpData}
            className="btn btn-primary"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
