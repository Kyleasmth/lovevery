import React from "react";
import Box from "@mui/material/Box";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Image from "next/image";
import kitsTheme from "@/styles/kitsTheme";
import { ThemeProvider } from "@mui/material/styles";

interface KitImageListProps {
  kitData: KitItemType[];
  setIndex: (index: number) => void;
  index: number;
}

interface KitItemType {
  kitTitle: string;
  src: string;
  imgAlt: string;
  kitDetails: string;
  suitableFor: string;
  reviews: number;
}

const KitImageList: React.FC<KitImageListProps> = ({
  kitData,
  setIndex,
  index,
}) => {
  return (
    <ThemeProvider theme={kitsTheme}>
      <Box sx={{ display: "flex " }}>
        <ChevronLeft
          sx={{
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            color: "grey",
            backgroundColor: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "10px",
            marginLeft: "10px",
            cursor: "pointer",
          }}
          onClick={() =>
            index - 1 < 0 ? setIndex(kitData.length - 1) : setIndex(index - 1)
          }
        />
        <ImageList
          sx={{
            width: "400px",
            gridAutoFlow: "column",
            overflow: "hidden",
          }}
        >
          {kitData.map((kit, i) => {
            const styles =
              i === index
                ? { border: `1.5px solid ${kitsTheme.palette.primary.main}` }
                : null;
            return (
              <div key={i} onClick={() => setIndex(i)}>
                <ImageListItem sx={styles} key={i}>
                  <Image
                    src={kit.src}
                    alt={kit.imgAlt}
                    width={67}
                    height={50}
                  />
                </ImageListItem>
              </div>
            );
          })}
        </ImageList>
        <ChevronRight
          sx={{
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            borderBlockColor: "grey",
            color: "grey",
            backgroundColor: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "10px",
            marginLeft: "10px",
            cursor: "pointer",
          }}
          onClick={() => {
            index + 1 > kitData.length - 1 ? setIndex(0) : setIndex(index + 1);
          }}
        />
      </Box>
    </ThemeProvider>
  );
};

export default KitImageList;
