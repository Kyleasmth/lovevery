import React from "react";
import Box from "@mui/material/Box";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

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
          gridTemplateColumns: "repeat(auto-fit, minmax(70px,1fr)) !important",
          gridAutoColumns: "minmax(70px, 1fr)",
          overflow: "hidden",
        }}
      >
        {kitData.map((kit, i) => {
          const styles =
            i === index
              ? { borderColor: "green", border: "2px solid green" }
              : { borderColor: "white", border: "1px solid white" };
          return (
            <div key={i} onClick={() => setIndex(i)}>
              <ImageListItem sx={styles} key={i}>
                <img src={kit.src} alt={kit.imgAlt} />
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
  );
};

export default KitImageList;
