import React from "react";
import { connect } from "react-redux";
import { removePost } from "../store/actions";
import { Link } from "react-router-dom";

function Favorites({ selectedPosts, removePost }) {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        {" "}
        <Link to="/" style={{ fontSize: "20px" }}>
          {" "}
          Back to Homepage
        </Link>{" "}
        Favorites [{selectedPosts === null ? 0 : selectedPosts.length}]:
      </h1>
      <ul
        style={{ display: "grid", gridTemplateColumns: "auto  auto auto auto" }}
      >
        {selectedPosts === null
          ? ""
          : selectedPosts.map((each) => {
              return (
                <div
                  key={each.id}
                  style={{
                    margin: 5,
                    padding: 5,
                    background: "white",
                    width: "300px",
                    textAlign: "center",
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1598124146163-36819847286d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8anBnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                    width="300px"
                    alt="pyramids"
                  />
                  <h4>{each.title}</h4>
                  <p>{each.body}</p>
                  <button onClick={()=> removePost(each)}>Remove</button>
                </div>
              );
            })}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { selectedPosts: state.selectedPosts };
};

export default connect(mapStateToProps, {removePost})(Favorites);
