"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import InstagramIcon from "@mui/icons-material/Instagram";
import AdbIcon from "@mui/icons-material/Adb";
import Link from "next/link";
import Drawer from "@mui/material/Drawer";
import { List } from "@mui/material";
import { navData } from "../configs/nav-config";
import { usePathname } from "next/navigation";
import PersonIcon from "@mui/icons-material/Person";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailIcon from "@mui/icons-material/Mail";
import IconWithText from "./icon-with-text";

const topHeaderIconStyles = {
  color: "secondary.light",
  "&:hover": { color: "secondary.main", cursor: "pointer" },
};

function Navbar() {
  const pathname = usePathname();
  const activeRoute = pathname.split("/")[1]
    ? `/${pathname.split("/")[1]}`
    : "/";

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: "transparent",
        color: "secondary.dark",
        boxShadow: "none",
        backdropFilter: "blur(15px)",
      }}
      elevation={0}
    >
      <Box
        sx={{
          width: "100%",
          py: 2,
          borderBottom: "1px solid",
          borderBottomColor: "secondary.A100",
          display: {
            xs: "none",
            md: "flex",
          },
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <IconWithText
              Icon={<InstagramIcon sx={topHeaderIconStyles} />}
              href="https://instagram.com"
            />
            <IconWithText
              Icon={<FacebookIcon sx={topHeaderIconStyles} />}
              href="https://facebook.com"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <IconWithText
              Icon={<MailIcon sx={topHeaderIconStyles} />}
              text="info@example.com"
              href="mailto:info@example.com"
            />
            <IconWithText
              Icon={<WhatsAppIcon sx={topHeaderIconStyles} />}
              text="+1 234 567 8900"
              href="https://wa.me/12345678900"
            />
          </Box>
        </Container>
      </Box>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            py: {
              xs: 1,
              md: 3,
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{
                display: {
                  md: "none",
                },
              }}
            >
              <MenuIcon />
            </IconButton>

            <Logo />

            {/* Desktop nav */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
              {navData.map((nav) => {
                return (
                  <Typography
                    component={Link}
                    href={nav.path}
                    key={nav.title}
                    prefetch={false}
                    sx={{
                      color:
                        activeRoute === nav.path
                          ? "secondary.main"
                          : "secondary.dark",
                      textDecoration: "none",
                      fontSize: 18,
                      fontWeight: 500,
                      transition: "0.3s linear",
                      px: 2,
                      py: 1,
                      borderBottom: "2px solid",
                      borderBottomColor:
                        activeRoute === nav.path
                          ? "secondary.main"
                          : "transparent",
                      position: "relative",
                      "&:hover": {
                        color: "secondary.main",
                      },
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        opacity: activeRoute === nav.path ? 0 : 1,
                        width: "100%",
                        height: 2,
                        bottom: 0,
                        left: 0,
                        backgroundColor: "secondary.main",
                        transform: "scaleX(0)",
                        transformOrigin: "bottom right",
                        transition: "transform 0.25s ease-out",
                      },
                      "&:hover::before": {
                        transform: "scaleX(1)",
                        transformOrigin: "bottom left",
                      },
                    }}
                  >
                    {nav.title}
                  </Typography>
                );
              })}
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: 2,
                alignItems: "center",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  display: {
                    xs: "none",
                    md: "flex",
                  },
                  color: "secondary.dark",
                }}
              >
                +1 234 567 8900
              </Typography>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  p: 0.5,
                  border: 2,
                  borderColor: "secondary.dark",
                  borderRadius: "50%",
                }}
              >
                <PersonIcon
                  sx={{
                    color: "secondary.dark",
                    fontSize: 30,
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile nav */}
      <Drawer
        anchor={"left"}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
      >
        <List
          sx={{
            width: 300,
            bgcolor: "primary.main",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              py: 2.5,
              px: 2,
            }}
          >
            <Logo color="secondary" />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              py: 2,
              mr: 2,
            }}
          >
            {navData.map((nav) => {
              return (
                <Typography
                  component={Link}
                  href={nav.path}
                  key={nav.title}
                  onClick={handleCloseNavMenu}
                  sx={{
                    color: "secondary.dark",
                    textDecoration: "none",
                    fontSize: 18,
                    fontWeight: 500,
                    px: 2,
                    py: 2,
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                    transition: "0.3s linear",
                    "&:hover": {
                      bgcolor: "primary.light",
                      color: "secondary.main",
                    },
                  }}
                >
                  {nav.title}
                </Typography>
              );
            })}
          </Box>
        </List>
      </Drawer>
    </AppBar>
  );
}
export default Navbar;

const Logo = ({ color }: { color?: "primary" | "secondary" }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <AdbIcon sx={{ mr: 1, color: color ? `${color}.main` : "inherit" }} />
      <Typography
        variant="h5"
        noWrap
        component="a"
        href="#app-bar-with-responsive-menu"
        sx={{
          mr: 2,
          flexGrow: 1,
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: color ? `${color}.main` : "inherit",
          textDecoration: "none",
        }}
      >
        LOGO
      </Typography>
    </Box>
  );
};
