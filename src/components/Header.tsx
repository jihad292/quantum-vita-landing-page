import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Typography,
  useMediaQuery
} from "@mui/material";
import theme from "../theme";
import { useEffect, useState } from "react";

export default function Header() {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation on component mount
    setIsLoaded(true);
  }, []);

  return (
    <Box>
      {/* Header/Logo Section */}
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar sx={{ 
          display: "flex", 
          justifyContent: "space-between", 
          background: "linear-gradient(135deg, #dfe6ff 0%, #c8d5ff 100%)",
          py: isMobile ? 3 : 5,
          borderBottom: "2px solid",
          borderColor: "primary.main",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            boxShadow: "0 4px 20px rgba(3, 44, 125, 0.1)"
          }
        }}>
          <Box sx={{ 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center", 
            flex: 1,
            animation: isLoaded ? "slideInDown 0.6s ease-out" : "none",
            "@keyframes slideInDown": {
              from: {
                opacity: 0,
                transform: "translateY(-20px)"
              },
              to: {
                opacity: 1,
                transform: "translateY(0)"
              }
            }
          }}>
            <Box
              component="img"
              height={isMobile ? "100" : "150"}
              width={isMobile ? "186" : "280"}
              src={
                isMobile
                  ? "/images/quantum-logo-mobile.png"
                  : "/images/quantum-logo.png"
              }
              alt="Quantum Logo"
              sx={{
                imageRendering: "crisp-edges",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)"
                }
              }}
            />
          </Box>

           
           <Box>
          <Button color="primary" sx={{ mx: 1 }}>
            Sign In
          </Button>
          <Button color="secondary" variant="contained" sx={{ mx: 1 }}>
            Register
          </Button>
          <Button color="primary" sx={{ mx: 1 }}>
            Contact Us
          </Button>
            </Box>
          
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box sx={{
        background: "linear-gradient(135deg, #032c7d 0%, #0942ca 50%, #1d97f1 100%)",
        py: isMobile ? 6 : 10,
        px: isMobile ? 3 : 6,
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)",
          pointerEvents: "none"
        }
      }}>
        <Box sx={{ position: "relative", zIndex: 1, maxWidth: "800px", mx: "auto" }}>
          <Typography
            variant="h3"
            fontWeight={800}
            color="white"
            sx={{
              mb: 2,
              animation: isLoaded ? "fadeInUp 0.8s ease-out 0.2s backwards" : "none",
              fontSize: isMobile ? "1.8rem" : "2.5rem",
              lineHeight: 1.3,
              "@keyframes fadeInUp": {
                from: {
                  opacity: 0,
                  transform: "translateY(30px)"
                },
                to: {
                  opacity: 1,
                  transform: "translateY(0)"
                }
              }
            }}
          >
            Transform Healthcare with AI-Powered Innovation
          </Typography>

          <Typography
            variant="h6"
            color="rgba(255, 255, 255, 0.95)"
            sx={{
              mb: 4,
              fontWeight: 300,
              fontSize: isMobile ? "0.95rem" : "1.1rem",
              lineHeight: 1.6,
              animation: isLoaded ? "fadeInUp 0.8s ease-out 0.4s backwards" : "none",
              "@keyframes fadeInUp": {
                from: {
                  opacity: 0,
                  transform: "translateY(30px)"
                },
                to: {
                  opacity: 1,
                  transform: "translateY(0)"
                }
              }
            }}
          >
            Unify clinical workflows, automate documentation, and deliver AI-powered insights 
            designed to reduce clinician workload and improve patient outcomes.
          </Typography>

          {/* CTA Button */}
         {/* <Button
            variant="contained"
            sx={{
              bgcolor: "white",
              color: "primary.main",
              fontWeight: 700,
              fontSize: "1rem",
              px: 4,
              py: 1.5,
              borderRadius: "50px",
              textTransform: "none",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              animation: isLoaded ? "fadeInUp 0.8s ease-out 0.6s backwards" : "none",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
              "&:hover": {
                bgcolor: "#f0f0f0",
                transform: "translateY(-3px)",
                boxShadow: "0 12px 32px rgba(0, 0, 0, 0.3)"
              },
              "&:active": {
                transform: "translateY(-1px)"
              },
              "@keyframes fadeInUp": {
                from: {
                  opacity: 0,
                  transform: "translateY(30px)"
                },
                to: {
                  opacity: 1,
                  transform: "translateY(0)"
                }
              }
            }}
          >
            Get Started Today
          </Button>*/}
        </Box>
      </Box>
    </Box>
  );
}
