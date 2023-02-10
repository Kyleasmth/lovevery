import React from "react";
import Link from "next/link";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface BreadCrumbProps {
  kitTitle: string;
}

const KitBreadCrumbs: React.FC<BreadCrumbProps> = ({ kitTitle }) => {
  return (
    <Box sx={{ flex: 1, padding: 3 }}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/">
          <Typography color="common.black" fontWeight="bold">
            Home
          </Typography>
        </Link>
        <Link color="inherit" href="/">
          <Typography color="common.black" fontWeight="bold">
            Play Kits
          </Typography>
        </Link>
        <Link color="inherit" href="/">
          <Typography color="textSecondary" fontWeight="bold">
            {kitTitle}
          </Typography>
        </Link>
      </Breadcrumbs>
    </Box>
  );
};

export default KitBreadCrumbs;
