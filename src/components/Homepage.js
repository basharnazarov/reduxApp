import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "../styles/homepage.css";
import "../styles/form.css";
import { selectPost, deletePost, editPost, createPost } from "../store/actions";

function Homepage({
  posts,
  selectedPosts,
  selectPost,
  deletePost,
  editPost,
  editablePost,
  createPost,
}) {
  const initialForm = {
    id: null,
    title: "",
    body: "",
  };
  const [open, setOpen] = React.useState(false);
  const [edit, setEdit] = React.useState(false);
  const [formState, setFormState] = React.useState(initialForm);

  return (
    <div>
      <nav className="navbar">
        <>
          <button onClick={() => setOpen(true)}>Create a new post</button>
        </>
        <Link to="/favorites">
          <button>
            Favorites [{selectedPosts === null ? 0 : selectedPosts.length}]
          </button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/signup">
          <button>Signup</button>
        </Link>
      </nav>
      <div className="main">
        <h1> News [{posts.length}]: </h1>
        <ul
          style={{
            display: "grid",
            gridTemplateColumns: "auto  auto auto auto",
          }}
        >
          {posts.map((each) => {
            return (
              <div
                key={each.title}
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
                <button onClick={() => selectPost(each)}>
                  Add to Favorites
                </button>
                <button
                  onClick={() => {
                    setEdit(true);
                    editPost(each)
                  }}
                >
                  Edit
                </button>
                <button onClick={() => deletePost(each)}>Delete</button>
              </div>
            );
          })}
        </ul>

        {open ? (
          <div
            className="form"
            style={{
              position: "absolute",
              left: "40%",
              top: "5%",
              height: "250px",
            }}
          >
            <h1>Create a new post </h1>
            <form>
              <input
                placeholder="id"
                onChange={(e) =>
                  setFormState({ ...formState, id: parseInt(e.target.value) })
                }
              />
              <input
                placeholder="title"
                onChange={(e) =>
                  setFormState({ ...formState, title: e.target.value })
                }
              />
              <input
                placeholder="body"
                onChange={(e) =>
                  setFormState({ ...formState, body: e.target.value })
                }
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  createPost(formState);
                  setOpen(false);
                }}
              >
                Create
              </button>
              <button onClick={() => setOpen(false)}>Cancel</button>
            </form>
          </div>
        ) : (
          ""
        )}

        {edit ? (
          <div
            className="form"
            style={{
              position: "absolute",
              left: "40%",
              top: "5%",
              height: "250px",
            }}
          >
            <h1>Edit the post </h1>
            <form>
              <input
                placeholder={`retype this id:  ${editablePost.id}`}
                onChange={(e) =>
                  setFormState({ ...formState, id: parseInt(e.target.value) })
                }
              />
              <input
                placeholder={`${editablePost.title}`}
                onChange={(e) =>
                  setFormState({ ...formState, title: e.target.value })
                }
              />
              <input
                placeholder={`${editablePost.body}`}
                onChange={(e) =>
                  setFormState({ ...formState, body: e.target.value })
                }
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                editPost(formState)
                  setEdit(false);
                }}
              >
                Confirm
              </button>
              <button onClick={() => setEdit(false)}>Cancel</button>
            </form>
          </div>
        ) : (
          ""
        )}
      </div>
      <footer className="footer">
        <Link to="/favorites">Favorites |</Link>
        <Link to="/login">Login |</Link>
        <Link to="/signup">Signup </Link>
      </footer>
    </div>
  );
}

const mapStateToProps = (state) => {
 
  return {
    posts: state.posts,
    selectedPosts: state.selectedPosts,
    editablePost: state.editablePost,
  };
};

export default connect(mapStateToProps, {
  selectPost,
  deletePost,
  editPost,
  createPost,
})(Homepage);
