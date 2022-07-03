import { Avatar, Button, Card, Typography } from "@mui/material";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function FriendsSkeleton() {
  const [count, setCount] = React.useState([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
  ]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8">
          {count.map((item, index) => (
            <Card key={item.id} className="mt-2">
              <div className="friendsAvatar">
                <div>
                  <Skeleton width={50} height={50} borderRadius="100%" />
                </div>
                <div className="mt-2 text-light">
                  <Skeleton width={95} height={34} />
                </div>
                <div className="mt-2">
                  <span>
                    <Skeleton width={72} height={34} />
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
