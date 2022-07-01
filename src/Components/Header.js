import { Close, Dehaze } from "@mui/icons-material";
import { AppBar, Toolbar } from "@mui/material";
import React, { useContext } from "react";
import GlobalContext from "./Context/GlobalContext";

import Sidenav from "./Sidenav";

export default function Header() {
  const { open, setOpen } = useContext(GlobalContext);
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className="navbar" style={{backgroundColor:'#343a40'}}>
          <div className="navbar-brand d-flex" onClick={() => setOpen(!open)}>
            <span className="mobile d-block d-sm-none">{open ?<Dehaze />  :<Close /> }</span>
            <span>Header</span>
          </div>
          <div>Home </div>
        </Toolbar>
      </AppBar>
      <div className="mt-5">
        <Sidenav open={open} />
      </div>
    </div>
  );
}
