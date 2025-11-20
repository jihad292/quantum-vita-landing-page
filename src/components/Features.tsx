import { Box, Typography, Grid, Paper, useMediaQuery } from "@mui/material";
import theme from "../theme"

const features = [
  {
    title: "AI-Assisted Speech to Text",
    text: "Saves time by eliminating paperwork in a unified EMR. Reduces manual report filling and clinician stress.",
    image: "/images/SPTT.jpg"
  },
  {
    title: "AI Diagnostics & Support Chat-Bot",
    text: "Reduces misdiagnosis, detects rare fatal cases early, and saves valuable time.",
    image: "/images/CHATBOTASSI.jpg"
  },
  {
    title: "Labs & Imaging Integration",
    text: "Unified platform with QR patient tracking. Patients upload lab images directly, analyzed with AI.",
    image: "/images/LABSINTEG.jpg"
  },
  {
    title: "One-Click Data Collection",
    text: "Extract entire databases instantly based on inclusion/exclusion criteria.",
    image: "/images/ONE_CLICK_DATA_COLLECTION_2.png"
  },
  {
    title: "Latest Articles Updates",
    text: "Daily specialty-based medical papers from prestigious journals delivered automatically.",
    image: "/images/LATESTARTICLES.jpg"
  },
  {
    title: "Administrative Automation",
    text: "AI handles scheduling, billing, reporting, and communication to reduce workload.",
    image: "/images/MANAGEMENTSYS.jpg"
  },
  {
    title: "Auditing",
    text: "Improves compliance and reduces errors across all operations.",
    image: "/images/AUDITING.jpg"
  },
  {
    title: "Clinical Impact",
    text: "AI partner assists diagnosis, research, and optimizes the standard of care.",
    image: "/images/RESEARCH.jpg"
  },
  {
    title: "Cloud-Based Encryption",
    text: "Ensures data protection, compliance, and strengthens patient trust.",
    image: "/images/CLOUD_BASED_ENCRYPTION.png"
  }
];

export default function Features() {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{
      py: isMobile ? 6 : 10,
      px: isMobile ? 3 : 6,
      background: "linear-gradient(135deg, #f5f7ff 0%, #e8eeff 100%)",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Decorative background */}
      <Box sx={{
        position: "absolute",
        bottom: "-50%",
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
        mb: 8,
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
          Features
        </Typography>
      </Box>

      {/* Features Grid */}
      <Grid container spacing={isMobile ? 2 : 3} sx={{ position: "relative", zIndex: 1 }}>
        {features.map((f, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: "16px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                background: "rgba(255, 255, 255, 0.9)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.5)",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                position: "relative",
                overflow: "hidden",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  background: "linear-gradient(90deg, #032c7d 0%, #1d97f1 100%)",
                  transform: "scaleX(0)",
                  transformOrigin: "left",
                  transition: "transform 0.4s ease-out"
                },
                "&:hover": {
                  transform: "translateY(-12px)",
                  boxShadow: "0 20px 48px rgba(3, 44, 125, 0.2)",
                  background: "rgba(255, 255, 255, 0.95)",
                  "&::before": {
                    transform: "scaleX(1)"
                  }
                }
              }}
            >
              {/* Feature Number Badge */}
              <Box sx={{
                position: "absolute",
                top: 16,
                right: 16,
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #032c7d 0%, #1d97f1 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: 700,
                fontSize: "1rem",
                boxShadow: "0 4px 12px rgba(3, 44, 125, 0.2)"
              }}>
                {i + 1}
              </Box>

              {/* Image */}
              <Box
                component="img"
                src={f.image}
                alt={f.title}
                sx={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "12px",
                  mb: 3,
                  transition: "transform 0.4s ease-out",
                  "&:hover": {
                    transform: "scale(1.05)"
                  }
                }}
              />

              {/* Title */}
              <Typography
                variant="h6"
                fontWeight={700}
                color="secondary"
                sx={{
                  mb: 1.5,
                  fontSize: isMobile ? "1.15rem" : "1.25rem",
                  lineHeight: 1.4
                }}
              >
                {f.title}
              </Typography>

              {/* Description */}
              <Typography
                variant="body2"
                sx={{
                  fontSize: isMobile ? "0.95rem" : "1rem",
                  lineHeight: 1.6,
                  color: "#555",
                  flex: 1
                }}
              >
                {f.text}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
