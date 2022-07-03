import { Typography } from "@mui/material";
import React from "react";
import Header from "../Header";
import "./Social.css";
import SocialFeed from "../Switch/SocialFeed";

export default function Feed() {
  return (
    <div>
      <Header />
      <div className="main">
        <div className="container">
          <div className="row mt-4">
            <div className="col-sm-12">
              <div>
                <Typography variant="h4" gutterBottom>
                  <b>Feeds</b>
                </Typography>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="gallery">
                <img src="https://source.unsplash.com/random/400x600" alt="" />
                <img src="https://source.unsplash.com/random/500x600" alt="" />
                <img src="https://source.unsplash.com/random/600x600" alt="" />
                <img src="https://source.unsplash.com/random/700x600" alt="" />
                <img src="https://source.unsplash.com/random/800x600" alt="" />
              </div>
            </div>
            <div className="col-sm-8 mt-3">
              <div>
                <h3>Recent Feeds</h3>
              </div>

              <SocialFeed />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
