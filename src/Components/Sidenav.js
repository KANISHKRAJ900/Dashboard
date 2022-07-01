import { Search } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import "./Sidenav.css";
import { Link } from "react-router-dom";
import { mainHeader, socialHeader } from "./Pages/SideHeader";

export default function Sidenav({ open }) {
  var location = window.location.pathname;
  console.log("location", location);
  return (
    <div>
      <div className="app">
        <div id="sidenav" className={open ? "sidenav1" : "sidenav"}>
          <section className="search mb-2">
            <label className="search__icon" for="search">
              <Search />
              <span className="sr-only">Search</span>
            </label>
            <input
              id="search"
              type="text"
              className="search__input"
              placeholder="Search"
              onFocus="expand()"
            />
          </section>
          {location === "/dashboard" ? (
            <>
              {mainHeader &&
                mainHeader.map((item, index) => (
                  <ul>
                    <li>
                      <button className="nav__button">
                        <Link to={item.link}>
                          <span className="nav__icon">{item.icon}</span>
                          <span className="nav__label">{item.name} </span>
                        </Link>
                      </button>
                    </li>
                  </ul>
                ))}
              <div className="sidenav__footer user">
                <button className="user__button">
                  <div className="user__badge">
                    <div className="user__image">
                      <Avatar
                        src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                        alt="User"
                      />
                    </div>
                  </div>
                  <div className="user__text">
                    <span className="user__name">John Smith</span>
                    <span className="user__title">Web developer</span>
                  </div>
                </button>
              </div>
            </>
          ) : (
            ""
          )}
          {location === "/social" ? (
            <>
              {" "}
              {socialHeader &&
                socialHeader.map((item, index) => (
                  <nav>
                    <ul>
                      <li>
                        <button className="nav__button">
                          <Link to={item.link}>
                            <span className="nav__icon">{item.icon}</span>
                            <span className="nav__label">{item.name} </span>
                          </Link>
                        </button>
                      </li>
                    </ul>
                  </nav>
                ))}
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
