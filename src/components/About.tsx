import { Box, Typography } from "@mui/material";

export default function About() {
  return (
    <Box sx={{ py: 8, px: 4 }}>
      <Typography variant="h4" fontWeight={700} color="primary">
        About Us
      </Typography>

      <Typography variant="body1" sx={{ mt: 2, maxWidth: 800 }}>
        Quantum Vita is a modern EMR platform built to transform the future of
        medicine. We unify clinical workflows, automate documentation, and
        deliver AI-powered insights designed to reduce clinician workload and
        improve patient outcomes. Our mission is to shape the next generation of
        healthcare through innovation, precision, and intelligent automation.
      </Typography>
    </Box>
  );
}
