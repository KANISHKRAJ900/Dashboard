import { Avatar, Button, Card, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import "./Friends.css";
import FriendsSkeleton from "./Skeleton/FriendsSkeleton";

export default function Friends({ value }) {
  const [friendSkeleton, setFriendSkeleton] = useState(true);
  const [count, setCount] = React.useState([
    {
      id: 1,
      name: "John Doe",
      avatar: "https://i.pravatar.cc/800",
    },
    { id: 2, name: "Rammy Iron", avatar: "https://i.pravatar.cc/500" },
    { id: 3, name: "Rajesh", avatar: "https://i.pravatar.cc/200" },
    { id: 4, name: "Rakesh", avatar: "https://i.pravatar.cc/700" },
  ]);
  //   console.log("count", count);
  console.log("id", count[0].id);

  const handleClick = (id) => {
    console.log("id", id);
    setCount(
      count.filter((item) => {
        return item.id !== id;
      })
    );
  };
  const handleSkeleton = () => {
    setFriendSkeleton(false);
  };
  useEffect(() => {
    setTimeout(() => {
      handleSkeleton();
    }, 2000);
  }, []);
  return (
    <>
      {friendSkeleton ? (
        <FriendsSkeleton />
      ) : (
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
                          src={item.avatar}
                          alt="friends"
                        />
                      </div>
                      <div className="mt-3 text-light">
                        <Typography variant="button" gutterBottom>
                          <b>{item.name} </b>
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
                              onClick={() => handleClick(item.id)}
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
          </div>{" "}
        </>
      )}
    </>
  );
}
