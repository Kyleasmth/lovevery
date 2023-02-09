import Link from "next/link";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";
import Stack from "@mui/material/Stack";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ background: "transparent", boxShadow: "none" }}
      >
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex" }}>
            <Link href="/playkits">
              <Stack direction="row" alignItems="center">
                <Typography
                  variant="h6"
                  color="textSecondary"
                  fontWeight="bold"
                >
                  Shop
                </Typography>
                <ExpandMoreIcon
                  sx={{
                    marginRight: "3rem",
                    color: "textSecondary",
                  }}
                />
              </Stack>
            </Link>
            <Link href="/playkits">
              <Stack direction="row" alignItems="center">
                <Typography
                  variant="h6"
                  color="textSecondary"
                  fontWeight="bold"
                >
                  About Us
                </Typography>
                <ExpandMoreIcon
                  sx={{
                    marginRight: "1rem",
                    color: "textSecondary",
                  }}
                />
              </Stack>
            </Link>
          </div>
          <Link href="/playkits">
            <Typography variant="h6" color="textSecondary">
              <Image
                src="/loveverylogo.jpg"
                width={250}
                height={70}
                alt="Example image"
                quality={100}
              />
            </Typography>
          </Link>
          <div style={{ display: "flex" }}>
            <Link href="/playkits">
              <Typography
                variant="h6"
                color="textSecondary"
                fontWeight="bold"
                style={{ marginRight: "1rem" }}
              >
                Help
              </Typography>
            </Link>
            <Link href="/playkits">
              <Typography
                variant="h6"
                color="textSecondary"
                fontWeight="bold"
                style={{ marginRight: "1rem" }}
              >
                Sign In
              </Typography>
            </Link>
            <Link href="/playkits">
              <Typography variant="h6" fontWeight="bold" color="textSecondary">
                Cart
              </Typography>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
