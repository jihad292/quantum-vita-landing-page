import { Box, Typography,useMediaQuery } from "@mui/material";
import theme from "../theme";

export default function Aim() {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  return (
    <Box sx={{ py: 8, px: 4, bgcolor: "lightBlue.main" }}>
      <Typography variant="h4" fontWeight={700} color="primary">
        Our Aim
      </Typography>

        <Box sx={{ py: 8, px: 4, 
              display: 'flex', 
              justifyContent: 'space-between', // Puts maximum space between the two items
              alignItems: 'center'}}>
      <img
            src={
              isMobile
                ? "/images/AIM.jpg"
                : "/images/AIM.jpg"
            }
            alt="About Us"
            height="300" width="500"
          />

      <Typography variant="body1" sx={{ mt: 2, maxWidth: 800 }}>
        Improve the quality of medical care while keeping healthcare costs at
        the lowest possible levels—powered by AI, automation, and seamless
        clinical workflows.
      </Typography>
      </Box>
    </Box>
  );
}
