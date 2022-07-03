import React from "react";

const EmptyFriends = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div>
              <img
                className="img-fluid"
                style={{ width: "100%", height: "100%" }}
                src="https://media.istockphoto.com/vectors/psychology-emotion-and-relationship-psychotherapy-concept-vector-flat-vector-id1257534536?k=20&m=1257534536&s=612x612&w=0&h=wQXN35KPpHmrQjK1kX3Bk33DEHjpPO0eCdIZgNFTRqw="
                alt="You have to atleast have one friend to see here"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmptyFriends;
