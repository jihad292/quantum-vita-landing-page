import { Box, Typography,useMediaQuery } from "@mui/material";
import theme from "../theme";

export default function Footer() {
  return (
    <Box sx={{ px: 4, py: 4,
              //display: 'flex', 
              justifyContent: 'space-between',
              textAlign: "left",
              bgcolor: "darkBlue.main"
               }}>
    <Box sx={{ px: 4, py: 4,
              display: 'flex', 
              justifyContent: 'flex-start',
              textAlign: "left",
              gap: 2,
              //bgcolor: "darkBlue.main" 
              }}>

        <Typography variant="h4" fontWeight={1200} color="white" >
        Get To Know Us:
        </Typography>

        <a href="https://www.instagram.com/quantumvita?igsh=bXdscnp6NDZ0bGRt">
            <img height="50" width="50" 
                  src="/images/instagram-logo.png" className="Insta" />
        </a>

        <a href="https://www.facebook.com/share/1JyKfz7k8A/">
            <img height="50" width="50" 
                  src="/images/facebook-icon.png" className="FB" />
        </a>

        <a href="https://wa.me/96181388927">
            <img height="50" width="50" 
                  src="/images/whatsapp-logo.png" className="WHATSAPP" />
        </a>

    </Box>

      <Typography color="white" align="center">  
        © {new Date().getFullYear()} Quantum Vita — All Rights Reserved
      </Typography>

    </Box>
  );
}
