"use client";
import React from "react";
import { Stack, Typography, Divider } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import Link from "next/link";

import RightSection from "./RightSection";
import LeftSection from "./LeftSection";

const DrawerContent = () => {
  return (
    <Stack spacing={5} sx={{ padding: "2rem" }}>
      <Stack
        direction={"row"}
        alignItems="center"
        justifyContent="flex-end"
        spacing={1}
        sx={{ width: "100%", paddingRight: "1rem" }}>
        <LaunchIcon sx={{ color: "#108a00", width: "1rem" }} />
        <Typography
          variant="body2"
          sx={{
            "& a": {
              fontSize: "15px",
              lineHeight: "14px",
              letterSpacing: "0.6px",
              color: "#108a00",
            },
          }}>
          {/* <Link to='/job/1'>Open job in a new window</Link> */}
          <Link
            href={{
              pathname: "/job/1",
            }}>
            Open job in a new window
          </Link>
        </Typography>
      </Stack>
      <Stack
        direction="row"
        sx={{ border: "1px solid #ddd", borderRadius: "1rem" }}
        spacing={0.5}>
        <LeftSection />
        <Divider orientation="vertical" variant="middle" />
        <RightSection />
      </Stack>
    </Stack>
  );
};

export default DrawerContent;
