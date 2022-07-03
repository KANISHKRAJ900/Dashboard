import {
  Add,
  ChevronRight,
  Edit,
  PersonAddAlt1,
  TaskAlt,
  ThumbDownAlt,
  ThumbUp,
  ThumbUpAlt,
  ThumbUpOffAlt,
} from "@mui/icons-material";
import { Avatar, Button, IconButton, Tooltip, Typography } from "@mui/material";
import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import "./Social.css";
import SocialTabs from "../Switch/SocialTabs";

export default function Social() {
  // const [following, setFollowing] = React.useState(false);
  const [count, setCount] = React.useState([
    {
      count: 0,
    },
    { count: 1 },
    { count: 2 },
  ]);
  return (
    <>
      <Header />
      <div className="main">
        <div className="container">
          <div className="row mt-4">
            <div className="col-sm-12">
              <Link to="/dashboard">
                <span>
                  <Typography variant="caption" gutterBottom>
                    Dashboard <ChevronRight />
                  </Typography>
                </span>
              </Link>
              {/* <Link to="/social">
                <span>
                  <Typography variant="caption" gutterBottom>
                    Social <ChevronRight />
                  </Typography>
                </span>
              </Link> */}
            </div>
            <div className="col-sm-12">
              <div>
                <Typography variant="h4" gutterBottom>
                  <b>Social</b>
                </Typography>
              </div>
            </div>
            <div className="col-sm-8">
              <div>
                <Card>
                  <div className="coverimg">
                    <CardMedia
                      component="img"
                      height="140"
                      image="https://source.unsplash.com/random/800x600"
                      alt="green iguana"
                    />
                    <div className="frontimg">
                      <Avatar
                        sx={{ width: "100px", height: "100px" }}
                        src="https://source.unsplash.com/random/800x600"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className=" offset-2 col-10">
                      <CardContent>
                        <div className="user">
                          <div>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                              sx={{ fontWeight: "bold", mb: "0px" }}
                            >
                              Green Iguana
                            </Typography>
                            <p className="small">
                              <b>@GreenIguana</b>
                            </p>
                          </div>
                          <div>
                            <Link to="/social/socialupdate">
                              <Button
                                variant="contained"
                                size="small"
                                color="primary"
                                startIcon={<Edit />}
                              >
                                Edit
                              </Button>
                            </Link>
                          </div>
                          {/* <div
                            className="d-block d-sm-none"
                            onClick={() => setFollowing(!following)}
                          >
                            {following ? <ThumbUpOffAlt /> : <ThumbUp />}
                          </div> */}
                          {/* <div className="d-none d-sm-block">
                            <Button
                              variant="contained"
                              size="small"
                              color="primary"
                              style={{ width: "108px" }}
                              onClick={() => setFollowing(!following)}
                              startIcon={following ? <TaskAlt /> : <Add />}
                            >
                              {following ? "Following" : "Follow"}
                            </Button>
                          </div> */}
                        </div>
                        <Typography variant="body2" color="text.secondary">
                          Lizards are a widespread group of squamate reptiles,
                          with over 6,000 species, ranging across all continents
                          except Antarctica
                        </Typography>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
            <div className="col-sm-3 d-none d-sm-block">
              <div className="profile_style">
                <div className="d-flex justify-content-between">
                  <div className="mt-2">
                    <Typography variant="button" gutterBottom>
                      Suggested For You
                    </Typography>
                  </div>
                  <div>
                    <Tooltip placement="top-start" title="See All">
                      <IconButton>
                        <ChevronRight className="text-light" />
                      </IconButton>
                    </Tooltip>
                    {/* <Typography variant="caption" gutterBottom>
                      See All
                    </Typography> */}
                  </div>
                </div>
                <hr sx={{ mt: 0 }} />
                {count.map((item, index) => (
                  <div key={item.id} className="d-flex justify-content-between">
                    <div className="d-flex">
                      <div>
                        <Avatar
                          // className="rounded-circle"
                          src="https://source.unsplash.com/random/800x600"
                          alt="user"
                        />
                      </div>
                      <div className="mx-3">
                        <Typography
                          variant="h7"
                          gutterBottom
                          sx={{ fontWeight: "bold" }}
                        >
                          Aditi Sharma
                        </Typography>{" "}
                        <p className="small">@AditiSharma</p>
                      </div>
                    </div>
                    <div>
                      <div className="addicon">
                        <PersonAddAlt1 className="text-light" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-8">
              <SocialTabs />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
