import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ py: 4, textAlign: "center", bgcolor: "darkBlue.main" }}>
      <Typography color="white">
        © {new Date().getFullYear()} Quantum Vita — All Rights Reserved
      </Typography>
    </Box>
  );
}
