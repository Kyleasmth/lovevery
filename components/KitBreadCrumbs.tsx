import React from "react";
import Link from "next/link";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Box from "@mui/material/Box";

interface BreadCrumbProps {
  kitTitle: string;
}

const KitBreadCrumbs: React.FC<BreadCrumbProps> = ({ kitTitle }) => {
  return (
    <Box sx={{ flex: 1, padding: 3 }}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/">
          Home
        </Link>
        <Link color="inherit" href="/">
          Play Kits
        </Link>
        <Link color="inherit" href="/">
          {kitTitle}
        </Link>
      </Breadcrumbs>
    </Box>
  );
};

export default KitBreadCrumbs;
