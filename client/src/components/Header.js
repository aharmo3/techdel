import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { URL } from "../constants";
import "./Header.scss";
// import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <div className="logo">Techdel Test</div>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, marginLeft: 20 }}
          >
            <Link
              style={{ color: "#fff", textDecoration: "none" }}
              to={URL.HOME}
            >
              Home
            </Link>
            |
            <Link
              style={{ color: "#fff", textDecoration: "none" }}
              to={URL.COMPANIES}
            >
              Companies
            </Link>
          </Typography>

          <Avatar sx={{ bgcolor: "#609EA2" }}>N</Avatar>

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
