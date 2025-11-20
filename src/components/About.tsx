import { Box, Typography, useMediaQuery } from "@mui/material";
import theme from "../theme";

export default function About() {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{
      py: isMobile ? 6 : 10,
      px: isMobile ? 3 : 6,
      background: "linear-gradient(135deg, #f5f7ff 0%, #e8eeff 100%)",
      borderTop: "3px solid",
      borderColor: "primary.main",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Decorative background elements */}
      <Box sx={{
        position: "absolute",
        top: "-50%",
        right: "-10%",
        width: "400px",
        height: "400px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(29, 151, 241, 0.05) 0%, transparent 70%)",
        pointerEvents: "none"
      }} />

      {/* Section Heading with Accent */}
      <Box sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        mb: 6,
        position: "relative",
        zIndex: 1
      }}>
        <Box sx={{
          width: "4px",
          height: "35px",
          background: "linear-gradient(135deg, #032c7d 0%, #1d97f1 100%)",
          borderRadius: "2px"
        }} />
        <Typography
          variant="h4"
          fontWeight={700}
          color="primary"
          sx={{
            fontSize: isMobile ? "1.8rem" : "2.2rem"
          }}
        >
          About Us
        </Typography>
      </Box>

      {/* Main Content */}
      <Box sx={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between',
        alignItems: isMobile ? 'center' : 'center',
        gap: isMobile ? 3 : 6,
        py: 4,
        px: isMobile ? 0 : 4,
        position: "relative",
        zIndex: 1
      }}>
        {/* Image Section */}
        <Box sx={{
          flex: isMobile ? "0 1 100%" : "0 1 45%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <Box
            component="img"
            src="/images/ABOUTUS.jpg"
            alt="About Us"
            sx={{
              height: isMobile ? "250px" : "350px",
              width: isMobile ? "100%" : "450px",
              objectFit: "cover",
              borderRadius: "12px",
              border: "3px solid white",
              boxShadow: "0 12px 32px rgba(3, 44, 125, 0.15)",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              "&:hover": {
                transform: "translateY(-8px) scale(1.02)",
                boxShadow: "0 20px 48px rgba(3, 44, 125, 0.25)"
              }
            }}
          />
        </Box>

        {/* Text Section */}
        <Box sx={{
          flex: isMobile ? "0 1 100%" : "0 1 50%",
          display: "flex",
          flexDirection: "column",
          gap: 2
        }}>
          <Typography
            variant="h6"
            fontWeight={400}
            sx={{
              fontSize: isMobile ? "1.15rem" : "1.3rem",
              lineHeight: 1.8,
              color: "#1a1a1a",
              letterSpacing: "0.3px"
            }}
          >
            <Typography
              component="span"
              sx={{
                fontWeight: 700,
                color: "primary.main",
                fontSize: "inherit"
              }}
            >
              Quantum Vita
            </Typography>
            {" "}is a modern EMR platform built to transform the future of medicine. We{" "}
            <Typography
              component="span"
              sx={{
                fontWeight: 600,
                color: "info.main",
                background: "linear-gradient(120deg, #1d97f1 0%, #0942ca 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: "inherit"
              }}
            >
              unify clinical workflows
            </Typography>
            , automate documentation, and deliver{" "}
            <Typography
              component="span"
              sx={{
                fontWeight: 600,
                color: "secondary.main",
                fontSize: "inherit"
              }}
            >
              AI-powered insights
            </Typography>
            {" "}designed to reduce clinician workload and improve patient outcomes. Our mission is to shape the next generation of healthcare through innovation, precision, and intelligent automation.
          </Typography>

          {/* Key Points */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, mt: 2 }}>
            <Box sx={{ display: "flex", gap: 1.5, alignItems: "flex-start" }}>
              <Box sx={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #032c7d 0%, #1d97f1 100%)",
                mt: 1.2
              }} />
              <Typography variant="body2" sx={{ fontSize: isMobile ? "1rem" : "1.1rem", color: "#333" }}>
                Unified clinical workflows
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 1.5, alignItems: "flex-start" }}>
              <Box sx={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #032c7d 0%, #1d97f1 100%)",
                mt: 1.2
              }} />
              <Typography variant="body2" sx={{ fontSize: isMobile ? "1rem" : "1.1rem", color: "#333" }}>
                Automated documentation
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 1.5, alignItems: "flex-start" }}>
              <Box sx={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #032c7d 0%, #1d97f1 100%)",
                mt: 1.2
              }} />
              <Typography variant="body2" sx={{ fontSize: isMobile ? "1rem" : "1.1rem", color: "#333" }}>
                AI-powered insights
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
