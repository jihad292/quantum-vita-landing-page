import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Typography,
  useMediaQuery
} from "@mui/material";
import theme from "../theme";

export default function Header() {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar position="static" color="transparent" elevation={4}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", bgcolor: "#dfe6ff", py: 5 }}>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flex: 1 }}>
          <img height="150" width="280" 
        src={
          isMobile
          ? "/images/quantum-logo-mobile.png"
          : "/images/quantum-logo.png"
        }
        alt="Quantum Logo"
        style={{ imageRendering: "crisp-edges" }}
          />
        </Box>

        {/* 
          <Box>
        <Button color="primary" sx={{ mx: 1 }}>
          Sign In
        </Button>
        <Button color="secondary" variant="contained" sx={{ mx: 1 }}>
          Sign Up
        </Button>
        <Button color="primary" sx={{ mx: 1 }}>
          Contact Us
        </Button>
          </Box>
        */}
      </Toolbar>
    </AppBar>
  );
}
