import { Avatar, Button, Card, Typography } from "@mui/material";
import React from "react";
import "./Friends.css";

export default function Friends({ value }) {
  const [count, setCount] = React.useState([
    {
      id: 1,
    },
    { id: 2 },
    { id: 3 },
    { id: 4 },
  ]);
  //   console.log("count", count);
  console.log("id", count[0].id);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            {count.map((item, index) => (
              <Card className="mt-2" key={item.id}>
                <div className="friendsAvatar">
                  <div>
                    <Avatar
                      sx={{ width: "50px", height: "50px" }}
                      src="https://i.pravatar.cc/300"
                      alt="friends"
                    />
                  </div>
                  <div className="mt-3 text-light">
                    <Typography variant="button" gutterBottom>
                      <b>Swati Singh</b>
                    </Typography>
                  </div>
                  <div className="mt-3">
                    <span>
                      {value === 2 && (
                        <>
                          {" "}
                          <Button
                            sx={{ mx: 2 }}
                            variant="contained"
                            size="small"
                            color="primary"
                          >
                            Accept
                          </Button>
                          <Button
                            variant="contained"
                            size="small"
                            color="secondary"
                          >
                            Reject
                          </Button>
                        </>
                      )}
                      {value === 1 && (
                        <Button
                          variant="contained"
                          size="small"
                          color="secondary"
                          onClick={() => setCount([...count, { id: index }])}
                        >
                          Reject
                        </Button>
                      )}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
