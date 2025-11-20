import { Box, Typography, useMediaQuery } from "@mui/material";
import theme from "../theme";

export default function Footer() {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ 
      px: isMobile ? 3 : 6, 
      py: 8,
      bgcolor: "darkBlue.main",
      borderTop: "3px solid",
      borderColor: "primary.main",
      background: "linear-gradient(135deg, #030d30 0%, #0a1a4a 100%)"
    }}>
      {/* Main Footer Content */}
      <Box sx={{ 
        display: 'flex', 
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between', 
        alignItems: isMobile ? 'center' : 'flex-start',
        gap: 4,
        mb: 4
      }}>
        {/* Left Section - Social Links */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column',
          gap: 2,
          alignItems: isMobile ? 'center' : 'flex-start'
        }}>
          <Typography 
            variant="h6" 
            fontWeight={700} 
            color="white"
            sx={{ 
              fontSize: "1rem",
              letterSpacing: "0.5px",
              mb: 1
            }}
          >
            CONNECT WITH US
          </Typography>

          {/* Social Icons */}
          <Box sx={{ 
            display: 'flex', 
            gap: 2,
            justifyContent: isMobile ? 'center' : 'flex-start'
          }}>
            <a href="mailto:Quantumvita@outlook.com" style={{ textDecoration: 'none' }}>
              <Box
                component="img"
                src="/images/GMAIL_LOGO.png"
                alt="Gmail"
                sx={{
                  height: 45,
                  width: 45,
                  borderRadius: "50%",
                  padding: "8px",
                  bgcolor: "rgba(255, 255, 255, 0.1)",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: "pointer",
                  "&:hover": {
                    bgcolor: "#1d97f1",
                    transform: "translateY(-4px) scale(1.1)",
                    boxShadow: "0 8px 16px rgba(29, 151, 241, 0.3)"
                  }
                }}
              />
            </a>

            <a href="https://www.instagram.com/quantumvita?igsh=bXdscnp6NDZ0bGRt" style={{ textDecoration: 'none' }}>
              <Box
                component="img"
                src="/images/instagram-logo.png"
                alt="Instagram"
                sx={{
                  height: 45,
                  width: 45,
                  borderRadius: "50%",
                  padding: "8px",
                  bgcolor: "rgba(255, 255, 255, 0.1)",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: "pointer",
                  "&:hover": {
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    transform: "translateY(-4px) scale(1.1)",
                    boxShadow: "0 8px 16px rgba(102, 126, 234, 0.3)"
                  }
                }}
              />
            </a>

            <a href="https://www.facebook.com/share/1JyKfz7k8A/" style={{ textDecoration: 'none' }}>
              <Box
                component="img"
                src="/images/facebook-icon.png"
                alt="Facebook"
                sx={{
                  height: 45,
                  width: 45,
                  borderRadius: "50%",
                  padding: "8px",
                  bgcolor: "rgba(255, 255, 255, 0.1)",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: "pointer",
                  "&:hover": {
                    bgcolor: "#1877F2",
                    transform: "translateY(-4px) scale(1.1)",
                    boxShadow: "0 8px 16px rgba(24, 119, 242, 0.3)"
                  }
                }}
              />
            </a>

            <a href="https://wa.me/96181388927" style={{ textDecoration: 'none' }}>
              <Box
                component="img"
                src="/images/whatsapp-logo.png"
                alt="WhatsApp"
                sx={{
                  height: 45,
                  width: 45,
                  borderRadius: "50%",
                  padding: "8px",
                  bgcolor: "rgba(255, 255, 255, 0.1)",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: "pointer",
                  "&:hover": {
                    bgcolor: "#25D366",
                    transform: "translateY(-4px) scale(1.1)",
                    boxShadow: "0 8px 16px rgba(37, 211, 102, 0.3)"
                  }
                }}
              />
            </a>
          </Box>
        </Box>

        {/* Right Section - Contact Info (Optional) */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: isMobile ? 'center' : 'flex-end',
          gap: 1
        }}>
          <Typography 
            variant="body2" 
            color="rgba(255, 255, 255, 0.8)"
            sx={{ fontSize: "0.9rem" }}
          >
            📧 Quantumvita@outlook.com
          </Typography>
          <Typography 
            variant="body2" 
            color="rgba(255, 255, 255, 0.8)"
            sx={{ fontSize: "0.9rem" }}
          >
            📱 +961 81 388 927
          </Typography>
        </Box>
      </Box>

      {/* Divider */}
      <Box sx={{ 
        height: "1px", 
        bgcolor: "rgba(255, 255, 255, 0.2)",
        mb: 4 
      }} />

      {/* Copyright Section */}
      <Box sx={{ 
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 2,
        textAlign: isMobile ? 'center' : 'left'
      }}>
        <Typography 
          variant="body2"
          color="rgba(255, 255, 255, 0.7)"
          sx={{ fontSize: "0.85rem" }}
        >
          © {new Date().getFullYear()} Quantum Vita LTD All Rights Reserved
        </Typography>
        
        <Typography 
          variant="body2"
          color="rgba(255, 255, 255, 0.7)"
          sx={{ fontSize: "0.85rem" }}
        >
          Transforming Healthcare with AI & Innovation
        </Typography>
      </Box>
    </Box>
  );
}
