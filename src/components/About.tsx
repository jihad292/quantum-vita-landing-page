import { Box, Typography, useMediaQuery } from "@mui/material";
import theme from "../theme";

export default function About() {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  return (
    <Box sx={{ py: 8, px: 4, 
             /* display: 'flex', 
              justifyContent: 'space-between', // Puts maximum space between the two items
              alignItems: 'center'*/}}>
      <Typography variant="h4" fontWeight={1200} color="primary" >
        About Us
      </Typography>
      <Box sx={{ py: 8, px: 4, 
              display: 'flex', 
              justifyContent: 'space-between', // Puts maximum space between the two items
              alignItems: 'center'}}>
      <img
            src={
              isMobile
                ? "/images/ABOUTUS.jpg"
                : "/images/ABOUTUS.jpg"
            }
            alt="About Us"
            height="300" width="500"
          />
          

      <Typography variant="body1" fontWeight={400} sx={{ mt: 2, maxWidth: 800 }}>
        Quantum Vita is a modern EMR platform built to transform the future of
        medicine. We unify clinical workflows, automate documentation, and
        deliver AI-powered insights designed to reduce clinician workload and
        improve patient outcomes. Our mission is to shape the next generation of
        healthcare through innovation, precision, and intelligent automation.
      </Typography>
      </Box>
    </Box>
  );
}
