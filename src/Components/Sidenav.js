import {
  AddBox,
  CalendarMonth,
  Campaign,
  Comment,
  Home,
  Mail,
  NotificationsActive,
  Search,
  Settings,
  VerifiedUserSharp,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import "./Sidenav.css";
import { Link } from "react-router-dom";

export default function Sidenav({ open }) {
  return (
    <div>
      <div className="app">
        <div id="sidenav" className={open ? "sidenav1" : "sidenav"}>
          {/* <header className="sidenav__header header">
			<span className="header__icon">
			<ChatBubble/>
			</span>
			<span className="header__text">
				
                Applications
            </span>
		</header> */}

          <section className="search">
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

          <nav className="sidenav__nav nav">
            <ul className="nav__list">
              <li className="nav__item is-active">
                <button className="nav__button">
                  <Link to="/dashboard">
                    <span className="nav__icon">
                      <Home />
                    </span>

                    <span className="nav__label">Dashboard</span>
                  </Link>
                </button>
              </li>
              <li className="nav__item">
                <button className="nav__button">
                  <span className="nav__icon">
                    <AddBox />
                  </span>
                  <span className="nav__label">Products</span>
                </button>
              </li>
              <li className="nav__item">
                <button className="nav__button">
                  <span className="nav__icon">
                    <Mail />
                  </span>
                  <span className="nav__label">Mail</span>
                </button>
              </li>
              <li className="nav__item">
                <button className="nav__button">
                  <span className="nav__icon">
                    <Campaign />
                  </span>
                  <span className="nav__label">Campaigns</span>
                </button>
              </li>
              <li className="nav__item">
                <button className="nav__button">
                  <span className="nav__icon">
                    <CalendarMonth />
                  </span>
                  <span className="nav__label">Calendar</span>
                </button>
              </li>
              <li className="nav__item">
                <button className="nav__button">
                  <span className="nav__icon">
                    <VerifiedUserSharp />
                  </span>
                  <span className="nav__label">Contacts</span>
                </button>
              </li>
            </ul>

            {/* <div className="nav__divider"></div> */}
            <ul className="nav__list">
              <li className="nav__item">
                <button className="nav__button">
                  <span className="nav__icon">
                    <NotificationsActive />
                  </span>
                  <span className="nav__label">Notifications</span>
                </button>
                <span className="nav__badge">12</span>
              </li>
              <li className="nav__item">
                <button className="nav__button">
                  <span className="nav__icon">
                    <Comment />
                  </span>
                  <span className="nav__label">Chat</span>
                </button>
                <span className="nav__badge warn">99+</span>
              </li>
              <li className="nav__item">
                <button className="nav__button">
                  <span className="nav__icon">
                    <Settings />
                  </span>
                  <span className="nav__label">Settings</span>
                </button>
              </li>
            </ul>
          </nav>

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
        </div>

        <div className="content"></div>
      </div>
    </div>
  );
}
