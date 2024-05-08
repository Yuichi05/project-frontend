import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../anime.jpeg";

function Register() {
  return (
    <>
      <div className="container has-text-centered">
        <div className="column is-4 is-offset-4">
          <h3 className="title has-text-black">Register</h3>
          <hr className="login-hr" />
          <div className="box">
            <div className="is-flex is-justify-content-center">
              <div className="is-flex-direction-column is-align-items-center">
                <figure className="image is-128x128 mb-5">
                  <img class="is-rounded" src={logo} />
                </figure>
              </div>
            </div>
            <form>
            <div className="field">
                <div className="control">
                  <input
                    className="input"
                    type="name"
                    placeholder="Username"
                    autofocus
                    required
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input
                    className="input"
                    type="email"
                    placeholder="Email Address"
                    autofocus
                    required
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input
                    className="input"
                    type="password"
                    placeholder="Password"
                    required
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input
                    className="input"
                    type="password"
                    placeholder="Confirm Password"
                    required
                  />
                </div>
              </div>
              <a
                href={"/home"}
                className="button is-info is-large is-fullwidth"
              >
                Register <i className="fa fa-sign-in" aria-hidden="true" />
              </a>
            </form>
          </div>
          <p className="has-text-grey">
            <Link to={`/login`}>Login</Link>
            &nbsp;·&nbsp;
            <a href="../">Forgot Password</a> &nbsp;·&nbsp;
            <a href="../">Need Help?</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;
