"use client";
import Input from "@mui/joy/Input";
import SearchIcon from "@mui/icons-material/Search";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Search = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Input
      placeholder="Search"
      sx={{
        borderRadius: "2rem",
        paddingRight: 0,
        paddingTop: 0,
        boxShadow: "none",
      }}
      startDecorator={<SearchIcon />}
      endDecorator={
        <>
          <Divider
            sx={{ height: "50%", margin: "auto 0" }}
            orientation="vertical"
            flexItem
          />
          <Button
            endIcon={<KeyboardArrowDownIcon />}
            sx={{
              color: "#001a00",
              display: "flex",
              textTransform: "capitalize",
              "& .css-9tj150-MuiButton-endIcon": { marginLeft: 0 },
            }}
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}>
            Jobs
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}>
            <MenuItem
              sx={{
                display: "flex",
                alignItems: "center",
                gap: ".5rem",
              }}
              onClick={handleClose}>
              <svg
                width="1.5rem"
                height="1.5rem"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                aria-hidden="true"
                viewBox="0 0 24 24"
                role="img">
                <path
                  vectorEffect="non-scaling-stroke"
                  stroke=" #001e00"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M8 17.47H5.71A2.71 2.71 0 013 14.76v-9A2.71 2.71 0 015.71 3H12a2.71 2.71 0 012.72 2.71v2M5.71 6.62h6.33M5.71 9.33h2.88"
                />
                <path
                  vectorEffect="non-scaling-stroke"
                  stroke="#001e00"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15.57 21a5.43 5.43 0 100-10.86 5.43 5.43 0 000 10.86z"
                />
                <path
                  vectorEffect="non-scaling-stroke"
                  stroke=" #001e00"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M18 13.85l-3.46 3.45-1.39-1.4"
                />
              </svg>
              Jobs
            </MenuItem>
            <MenuItem
              sx={{
                display: "flex",
                alignItems: "center",
                gap: ".5rem",
              }}
              onClick={handleClose}>
              <svg
                width="1.5rem"
                height="1.5rem"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                aria-hidden="true"
                viewBox="0 0 24 24"
                role="img">
                <path
                  vectorEffect="non-scaling-stroke"
                  stroke=" #001e00"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit={10}
                  strokeWidth={1.5}
                  d="M8.772 10.356a3.178 3.178 0 100-6.356 3.178 3.178 0 000 6.356zM3 19.436v-.28c0-3.365 2.633-6.076 5.902-6.076s5.902 2.71 5.902 6.075v.28m1.559-8.171a2.27 2.27 0 100-4.54 2.27 2.27 0 000 4.54zm-.571 2.724h.548c2.559 0 4.66 2.142 4.66 4.75v.698"
                />
              </svg>
              Talent
            </MenuItem>
            <MenuItem
              sx={{
                display: "flex",
                alignItems: "center",
                gap: ".5rem",
              }}
              onClick={handleClose}>
              <svg
                width="1.5rem"
                height="1.5rem"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                aria-hidden="true"
                viewBox="0 0 24 24"
                role="img">
                <path
                  vectorEffect="non-scaling-stroke"
                  stroke=" #001e00"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit={10}
                  strokeWidth={1.5}
                  d="M17.8 20.2h-12c-1.7 0-3-1.3-3-3v-8c0-1.7 1.3-3 3-3h12c1.7 0 3 1.3 3 3v8c0 1.6-1.4 3-3 3z"
                  clipRule="evenodd"
                />
                <path
                  vectorEffect="non-scaling-stroke"
                  stroke=" #001e00"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit={10}
                  strokeWidth={1.5}
                  d="M7.7 13.9v-3m8.1 3v-3m-13 1.3h18m-7.6-8.4h-3c-.6 0-1 .4-1 1v1.4h5V4.8c0-.6-.4-1-1-1z"
                />
              </svg>
              Projects
            </MenuItem>
          </Menu>
        </>
      }
    />
  );
};

export default Search;
