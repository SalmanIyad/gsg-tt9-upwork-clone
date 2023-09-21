"use client";
import { Stack, Typography, Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import { ITabPanelProps } from "@/@types/tab";
import JopDescription from "./JopDescription";
import EmptySavedJobs from "./EmptySavedJobs";

function CustomTabPanel(props: ITabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TabsSection = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  
  return (
    <Stack
      direction="column"
      mt="1rem"
      sx={{ border: "1px solid #ddd", borderRadius: "1rem" }}>
      <Typography variant={"h3"} sx={{ fontSize: "1.3rem", padding: "1rem" }}>
        Jobs you might like
      </Typography>
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{ borderBottom: 1, borderColor: "divider", padding: "0 1rem" }}>
          <Tabs
            sx={{
              "& .css-1p9i4sw-MuiButtonBase-root-MuiTab-root.Mui-selected": {
                color: "#001e00",
              },
              "& .css-1aquho2-MuiTabs-indicator": {
                backgroundColor: "#001e00",
              },
            }}
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example">
            <Tab
              sx={{ textTransform: "capitalize" }}
              label="Best Matches"
              {...a11yProps(0)}
            />
            <Tab
              sx={{ textTransform: "capitalize" }}
              label="Most Recent"
              {...a11yProps(1)}
            />
            <Tab
              sx={{ textTransform: "capitalize" }}
              label="Saved Jobs"
              {...a11yProps(2)}
            />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Typography
            variant="body2"
            sx={{
              fontSize: "12px",
              letterSpacing: ".6px",
              fontWeight: 500,
              paddingBottom: "1rem",
              padding: "1rem 0 1rem 1rem",
            }}>
            Browse jobs that match your experience to a client&apos;s hiring
            preferences. Ordered by most relevant.
          </Typography>
          <JopDescription />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Typography
            variant="body2"
            sx={{
              fontSize: "12px",
              letterSpacing: ".6px",
              fontWeight: 500,
              padding: "1rem 0 1rem 1rem",
            }}>
            Browse the most recent jobs that match your skills and profile
            description to the skills clients are looking for.
          </Typography>
          <JopDescription />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <EmptySavedJobs />
        </CustomTabPanel>
      </Box>
    </Stack>
  );
};

export default TabsSection;
