import { Box, Typography, Grid, Paper } from "@mui/material";

const features = [
  {
    title: "AI-Assisted Speech to Text",
    text: "Saves time by eliminating paperwork in a unified EMR. Reduces manual report filling and clinician stress."
  },
  {
    title: "AI Diagnostics & Support Chat-Bot",
    text: "Reduces misdiagnosis, detects rare fatal cases early, and saves valuable time."
  },
  {
    title: "Labs & Imaging Integration",
    text: "Unified platform with QR patient tracking. Patients upload lab images directly, analyzed with AI."
  },
  {
    title: "One-Click Data Collection",
    text: "Extract entire databases instantly based on inclusion/exclusion criteria."
  },
  {
    title: "Latest Articles Updates",
    text: "Daily specialty-based medical papers from prestigious journals delivered automatically."
  },
  {
    title: "Administrative Automation",
    text: "AI handles scheduling, billing, reporting, and communication to reduce workload."
  },
  {
    title: "Auditing",
    text: "Improves compliance and reduces errors across all operations."
  },
  {
    title: "Clinical Impact",
    text: "AI partner assists diagnosis, research, and optimizes the standard of care."
  },
  {
    title: "Cloud-Based Encryption",
    text: "Ensures data protection, compliance, and strengthens patient trust."
  }
];

export default function Features() {
  return (
    <Box sx={{ py: 8, px: 4 }}>
      <Typography variant="h4" fontWeight={700} color="primary" sx={{ mb: 4 }}>
        Features
      </Typography>

      <Grid container spacing={3}>
        {features.map((f, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Paper elevation={3} sx={{ p: 3, borderRadius: 3, height: "100%" }}>
              <Typography variant="h6" fontWeight={600} color="secondary">
                {f.title}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                {f.text}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
