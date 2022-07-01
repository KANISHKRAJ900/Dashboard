import { Button, Typography } from "@mui/material";
import React from "react";
import Header from "./Components/Header";
import "./Main.css";

export default function Main() {
  const [count, setCount] = React.useState([
    { id: 1, name: "John Doe" },
    { id: 2, name: "michelle" },
    { id: 3, name: "jane" },
    { id: 4, name: "joe" },
    { id: 5, name: "jill" },
  ]);
  return (
    <div>
      <Header />
      <div className="main">
        <div className="container">
          <div className="row mt-5">
            <div className="col-sm-12">
              <Typography variant="h4" gutterBottom>
                <b> Your Dashboard</b>
              </Typography>
            </div>
            <div className="col-sm-8 mt-3">
              <div className="avatr">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime non eveniet consectetur nostrum consequatur soluta
                  possimus aliquam inventore vero omnis ullam velit quas
                  aspernatur, nam voluptas, iure ad. Ullam minus aperiam
                  repudiandae? Tempora, necessitatibus velit! Commodi ducimus
                  error veniam quod provident consequuntur dolor laudantium?
                  Tempora tenetur ut sunt voluptatem modi.
                </p>
              </div>
            </div>
            <div className="col-sm-4 mt-3 ">
              <div className="profile_style">
                <Typography variant="h4" gutterBottom>
                  Hello,Rahil.
                </Typography>
                <div>
                  <b> Don't forget to complate your profile!</b>
                </div>
                <div className="mt-3">
                  <Typography variant="h5" gutterBottom>
                    Have a nice day!
                  </Typography>
                </div>
                <div>
                  <Button
                    variant="contained"
                    size="small"
                    className="bg-dark text-white mt-3"
                  >
                    View Profile
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-sm-8">
              <Typography variant="h4" gutterBottom>
                <b> Your Recent Activity</b>
              </Typography>
              <div className="table-responsive">
                <table className="table text-center">
                  <thead className="thcolor">
                    <tr className="tablebody ">
                      <th className="tdwidth"> Profile</th>
                      <th className="tdwidth"> Name</th>
                      <th className="tdwidth">​ Reciver</th>
                      <th colSpan={2} className="tdwidth">
                        {" "}
                        Message
                      </th>

                      <th className="tdwidth">View</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    {count.map((item) => (
                      <tr className="tablebody">
                        <td className="tdwidth">
                          <img
                            style={{ width: "50px", height: "50px" }}
                            className="img-fluid rounded-circle"
                            src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                            alt="profile"
                          />
                        </td>
                        <td className="tdwidth mt-1">
                          <b>{item.name} </b>
                        </td>
                        <td className="tdwidth px-5 mt-1 ">REciver</td>
                        <td className="tdwidth mt-1" colSpan={2}>
                          Lorem ipsum dolor sit amet.
                        </td>
                        <td className="tdwidth mt-1">
                          <Button
                            variant="contained"
                            className="bg-dark"
                            size="small"
                          >
                            Accept
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-sm-4">
              <Typography variant="h4" gutterBottom>
                pop up
              </Typography>
              <div className="row">
                <div className="col-6 mt-2">
                  <div className="profile_style text-center">
                    <Typography variant="h4" gutterBottom>
                      Hello
                    </Typography>
                    <div></div>
                  </div>
                </div>
                <div className="col-6 mt-2">
                  <div className="profile_style  text-center">
                    <Typography variant="h4" gutterBottom>
                      Hello
                    </Typography>
                    <div></div>
                  </div>
                </div>
                <div className="col-6 mt-2  text-center">
                  <div className="profile_style">
                    <Typography variant="h4" gutterBottom>
                      Hello
                    </Typography>
                    <div></div>
                  </div>
                </div>
                <div className="col-6 mt-2  text-center">
                  <div className="profile_style">
                    <Typography variant="h4" gutterBottom>
                      Hello
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-12">
                  <div className="profile_style">
                    <h5>
                      <b>Heading Goes here</b>
                    </h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Totam qui beatae, nam incidunt consequatur possimus quae
                      officia asperiores harum quibusdam. Lorem ipsum dolor sit,
                      amet consectetur adipisicing elit. Illo sit dolore est .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
