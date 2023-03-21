import React, { useEffect, useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import HistoryToggleOffIcon from "@mui/icons-material/HistoryToggleOff";
import { NavLink, useNavigate, useParams } from "react-router-dom";

const Details = () => {
  const [getuserdata, setUserData] = useState([]);
  console.log(getuserdata);

  const { id } = useParams("");
  console.log(id);

  const navigate = useNavigate("");

  const getData = async () => {
    const res = await fetch(`/getuser/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("Error");
    } else {
      setUserData(data);
      console.log("Get Data");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteUser = async (id) => {
    const res2 = await fetch(`/deleteuser/${id}`, {
        method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const deletedata = await res2.json();
        console.log(deletedata);

        if (res2.status === 422 || !deletedata) {
            console.log("error");
        } else {
            console.log("user deleted");
            navigate("/");
        }

    }

  return (
    <div className="container mt-3">
      <h1 style={{ fontWeight: 400 }}>Scan Result: </h1>

      <Card sx={{ maxWidth: 600 }}>
        <CardContent>
          <div className="row">
            <div className="left_view col-lg-6 col-md-6 col-12">
              <h3 className="mt-3">
                Name:{" "}
                <span style={{ fontWeight: 400 }}>{getuserdata.name}</span>
              </h3>
              <h3 className="mt-3">
                Status:{" "}
                <span style={{ fontWeight: 400 }}>{getuserdata.status}</span>
              </h3>
              <h3 className="mt-3">
                <HistoryToggleOffIcon />
                Queued At:{" "}
                <span style={{ fontWeight: 400 }}>{getuserdata.queued}</span>
              </h3>
              <h3 className="mt-3">
                <HistoryToggleOffIcon />
                Scanning At:{" "}
                <span style={{ fontWeight: 400 }}>{getuserdata.scanning}</span>
              </h3>
              <h3 className="mt-3">
                <HistoryToggleOffIcon />
                Finished At:{" "}
                <span style={{ fontWeight: 400 }}>{getuserdata.finished}</span>
              </h3>
            </div>
            <div className="rt_view col-lg-6 col-md-6 col-12">
              <div className="add_btn">
                <NavLink to={`/edit/${getuserdata._id}`}>
                  <button className="btn btn-primary mx-2">
                    <CreateIcon />
                  </button>
                </NavLink>
                <button className="btn btn-danger" onClick={() => deleteUser(getuserdata._id)}>
                  <DeleteOutlineIcon />
                </button>
              </div>
              <h4 style={{color: "#d9534f"}}>FINDINGS:</h4>
              <h3 className="mt-3">
                Type:{" "}
                <span style={{ fontWeight: 400 }}>{getuserdata.type}</span>
              </h3>
              <h3 className="mt-3">
                Rule ID:{" "}
                <span style={{ fontWeight: 400 }}>{getuserdata.rule}</span>
              </h3>
              <h3 className="mt-3">
                Path:{" "}
                <span style={{ fontWeight: 400 }}>{getuserdata.path}</span>
              </h3>
              <h3 className="mt-3">
                Position:{" "}
                <span style={{ fontWeight: 400 }}>{getuserdata.pos}</span>
              </h3>
              <h3 className="mt-3">
                Description:{" "}
                <span style={{ fontWeight: 400 }}>{getuserdata.desc}</span>
              </h3>
              <h3 className="mt-3">
                Severity:{" "}
                <span style={{ fontWeight: 400 }}>{getuserdata.severity}</span>
              </h3>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Details;
