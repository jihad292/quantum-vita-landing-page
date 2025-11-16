import { Box, Typography } from "@mui/material";

export default function Aim() {
  return (
    <Box sx={{ py: 8, px: 4, bgcolor: "lightBlue.main" }}>
      <Typography variant="h4" fontWeight={700} color="primary">
        Our Aim
      </Typography>

      <Typography variant="body1" sx={{ mt: 2, maxWidth: 800 }}>
        Improve the quality of medical care while keeping healthcare costs at
        the lowest possible levels—powered by AI, automation, and seamless
        clinical workflows.
      </Typography>
    </Box>
  );
}
