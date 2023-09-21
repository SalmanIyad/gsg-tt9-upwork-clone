import { Avatar, Box, Stack, Typography, Divider, Slider } from "@mui/material";
import Link from "next/link";
import EditButton from "@/components/atoms/EditButton";

const Sidebar = () => {
  return (
    <Stack
      direction="column"
      alignItems={"center"}
      spacing={2}
      sx={{
        width: "100%",
        border: "1px solid #ddd",
        borderRadius: "1rem",
        padding: "1rem 0",
      }}
    >
      <Stack direction="column" alignItems="center" spacing={1}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        <Box textAlign={"center"}>
          <Link href="profile">
            <Typography
              variant="body1"
              sx={{
                fontSize: "16px",
                fontWeight: "500",
                color: "#001e00",
                cursor: "pointer",
                "&:hover": {
                  color: "#14a800",
                },
              }}
            >
              Mohammed Raida
            </Typography>
          </Link>
          <Typography
            sx={{ fontSize: "12px", color: "#001e00" }}
            variant="body2"
          >
            Web Development
          </Typography>
        </Box>
      </Stack>
      <Stack
        direction="column"
        alignItems="flex-start"
        sx={{ width: "100%" }}
        spacing={0.5}
      >
        <Box sx={{ width: "100%", background: "#E4EBE4", padding: " 1rem" }}>
          <Typography
            sx={{
              fontSize: "12px",
              color: "#001e00",
              fontWeight: "700",
              cursor: "pointer",
              "&:hover": {
                color: "#14a800",
              },
            }}
            variant="body2"
          >
            Profile Completeness:{" "}
          </Typography>
          <Stack direction="row" alignItems='center' spacing={1}>
            <Slider
              sx={{
                "& .css-eg0mwd-MuiSlider-thumb": {
                  display: "none",
                },
                "& .css-jiy7vy-MuiSlider-root": {
                  width: "100%",
                },
                "& .css-1gv0vcd-MuiSlider-track": {
                  backgroundColor: "#14a800",
                },
              }}
              disabled
              value={100}
              aria-label="Disabled slider"
            />
            <Typography
              sx={{
                fontSize: "13px",
                color: "#001e00",
                fontWeight: "500",
              }}
            >
              100%
            </Typography>
          </Stack>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography
            sx={{
              padding: "1rem",
              fontSize: "12px",
              color: "#14a800",
              cursor: "pointer",

              "&:hover": {
                textDecoration: "underline",
              },
            }}
            variant="body2"
          >
            200 Available Connects
          </Typography>
          <Divider sx={{ width: "100%" }} />
          <Stack spacing={1} direction={"row"} alignItems={"center"}>
            <Typography
              sx={{
                padding: " 1rem 0 1rem 1rem ",
                fontSize: "15px",
                color: "#001e00",
                cursor: "pointer",
              }}
              variant="body2"
            >
              Availability Badge
            </Typography>
            <EditButton/>
          </Stack>
          <Stack spacing={1} direction={"row"} alignItems={"center"}>
            <Typography
              sx={{
                padding: "0 0 0 1rem",
                fontSize: "15px",
                color: "#001e00",
                cursor: "pointer",
              }}
              variant="body2"
            >
              Hours per week
            </Typography>
            <EditButton/>
          </Stack>
          <Typography
            sx={{
              padding: "0 1rem 1rem ",
              fontSize: "12px",
              color: "#001e00",
              cursor: "pointer",
            }}
            variant="body2"
          >
            More than 30 hrs/week{" "}
          </Typography>
          <Stack spacing={1} direction={"row"} alignItems={"center"}>
            <Typography
              sx={{
                padding: "0 0 0 1rem",
                fontSize: "15px",
                color: "#001e00",
                cursor: "pointer",
              }}
              variant="body2"
            >
              Profile Visibility
            </Typography>
            <EditButton/>
          </Stack>
          <Typography
            sx={{
              padding: "0 1rem 1rem  ",
              fontSize: "12px",
              color: "#001e00",
              cursor: "pointer",
            }}
            variant="body2"
          >
            Upwork Users Only
          </Typography>
          <Stack spacing={1} direction={"row"} alignItems={"center"}>
            <Typography
              sx={{
                padding: "0 0 0 1rem",
                fontSize: "15px",
                color: "#001e00",
                cursor: "pointer",
              }}
              variant="body2"
            >
              Job Preference
            </Typography>
            <EditButton/>
          </Stack>
          <Typography
            sx={{
              padding: "0 1rem 1rem",
              fontSize: "12px",
              color: "#001e00",
              cursor: "pointer",
            }}
            variant="body2"
          >
            No preference set
          </Typography>
          <Divider sx={{ width: "100%" }} />
          <Stack spacing={1} direction={"row"} alignItems={"center"}>
            <Typography
              sx={{
                padding: "0 0 0 1rem",
                fontSize: "15px",
                color: "#001e00",
                cursor: "pointer",
              }}
              variant="body2"
            >
              My Categories
            </Typography>
            <EditButton/>
          </Stack>
          <Typography
            sx={{
              padding: "0 1rem",
              fontSize: "12px",
              color: "#14a800",
              cursor: "pointer",
            }}
            variant="body2"
          >
            Web Development
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Sidebar;
