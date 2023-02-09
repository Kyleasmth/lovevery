import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import NavBar from "../components/NavBar";
import Divider from "@mui/material/Divider";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { green, blue } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import HandshakeIcon from "@mui/icons-material/Handshake";
import Image from "next/image";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import Stack from "@mui/material/Stack";

import KitBreadCrumbs from "../components/KitBreadCrumbs";
import BirthdayDatePicker from "../components/BirthdayDatePicker";
import KitImageList from "../components/KitImageList";

const kitData = [
  {
    kitTitle: "The Looker Play Kit",
    src: "/babyplaying1.jpg",
    imgAlt: "Image 1",
    suitableFor: "Suitable for 0-12 weeks old",
    kitDetails:
      "Sensitive to light and sound, your newborn is already becoming aware of their new world. This Play Kit helps them build new brain connections with high-contrast images and black and white sensory mittens.",
    reviews: 20,
  },
  {
    kitTitle: "The Charmer Play Kit",
    src: "/babyplaying2.jpg",
    imgAlt: "Image 2",
    suitableFor: "Suitable for 3-4 months old",
    kitDetails:
      "Your baby may start to recognize your face—cooing at you, smiling, and delighting everyone they meet. This Play Kit is designed to let your baby explore with their mouth, eyes, and hands as their personality emerges and their social awareness grows.",
    reviews: 13,
  },
  {
    kitTitle: "The Senser Play Kit",
    src: "/babyplaying3.jpg",
    imgAlt: "Image 3",
    suitableFor: "Suitable for 5-6 months old",
    kitDetails:
      "Your baby may be tasting, mouthing, and feeling everything they can get their hands on right now. This Play Kit helps your baby investigate their world around them, while working on getting themself closer to what looks and sounds exciting to them.",
    reviews: 15,
  },
  {
    kitTitle: "The Inspector Play Kit",
    src: "/babyplaying4.jpg",
    imgAlt: "Image 4",
    suitableFor: "Suitable for 7-8 months old",
    kitDetails:
      "Your baby is more aware of everything around them and fascinated with details. This Play Kit makes the most of your baby's natural curiosity about how things work with opportunities to explore texture, practice nesting and stacking, and learn about object permanence.",
    reviews: 62,
  },
  {
    kitTitle: "The Explorer Play Kit",
    src: "/babyplaying5.jpg",
    imgAlt: "Image 5",
    suitableFor: "Suitable for 9-10 months old",
    kitDetails:
      "Your baby loves to see the effect they can have on their environment. This Play Kit is designed to experiment with gravity, practice balance, and begin coordinating both sides of their body.",
    reviews: 32,
  },
  {
    kitTitle: "The Thinker Play Kit",
    src: "/babyplaying6.jpg",
    imgAlt: "Image 6",
    suitableFor: "Suitable for 11-12 months old",
    kitDetails:
      "Your baby is starting to put it all together and understand concepts at a deeper level. This Play Kit encourages your baby to define and organize information while engaging their budding imagination.",
    reviews: 122,
    //reviewID: 1, to access reviews table when clicking reviews.
  },
];

const theme = createTheme({
  palette: {
    primary: {
      main: green["A400"],
    },
    secondary: {
      main: blue["A700"],
      light: blue[400],
    },
  },
});

const BulletPointText: React.FC<{ text: string }> = ({ text }) => (
  <Box display="flex" alignItems="center" padding="5px">
    <Stack direction="row" alignItems="center">
      <Brightness1Icon
        sx={{
          color: "primary.main",
          fin: "0.5rem",
        }}
      />
      <Typography color="textSecondary" fontWeight="bold" fontSize={12}>
        {text}
      </Typography>
    </Stack>
  </Box>
);

const InputFields: React.FC<{
  today: any;
  birthday: any;
  setBirthday: any;
}> = ({ today, birthday, setBirthday }) => (
  <Stack direction="row" alignItems="center">
    <Box display="flex" alignItems="center">
      <TextField
        size="small"
        label="Your child's name (optional)"
        variant="outlined"
      />
    </Box>
    <Box display="flex" alignItems="center" padding="5px">
      <BirthdayDatePicker
        today={today}
        birthday={birthday}
        setBirthday={setBirthday}
      />
    </Box>
    <Box display="flex" alignItems="center" padding="5px">
      <Button variant="contained">Subscribe now</Button>
    </Box>
  </Stack>
);

const PlayKitsPage: React.FC = () => {
  const today = dayjs().format("MM/DD/YYYY");
  const [index, setIndex] = useState<number>(0);
  const [birthday, setBirthday] = useState<any>(null);

  useEffect(() => {
    if (birthday) {
      const startDate = dayjs(birthday);
      const endDate = dayjs(today);
      const ageInMonths = endDate.diff(startDate, "month");
      const selectKitIndex = (kitName: string) => {
        return setIndex(kitData.map((kit) => kit.kitTitle).indexOf(kitName));
      };

      if (ageInMonths < 3) {
        //Suitable for 0-12 weeks old
        selectKitIndex("The Looker Play Kit");
      } else if (ageInMonths >= 3 && ageInMonths < 5) {
        //Suitable for 3-4 months old
        selectKitIndex("The Charmer Play Kit");
      } else if (ageInMonths >= 5 && ageInMonths < 7) {
        //Suitable for 5-6 months old
        selectKitIndex("The Senser Play Kit");
      } else if (ageInMonths >= 7 && ageInMonths < 9) {
        //Suitable for 7-8 months old
        selectKitIndex("The Inspector Play Kit");
      } else if (ageInMonths >= 9 && ageInMonths < 11) {
        //Suitable for 9-10 months old
        selectKitIndex("The Explorer Play Kit");
      } else if (ageInMonths >= 11) {
        //Suitable for 11-12 months old
        selectKitIndex("The Thinker Play Kit");
      } else {
        return;
      }
    }
  }, [birthday, today]);

  const selectedKit = kitData[index];
  return (
    <ThemeProvider theme={theme}>
      <div style={{ background: "white" }}>
        <NavBar />
        <Grid container spacing={1} paddingLeft={20} paddingRight={20}>
          <Grid xs={10}>
            <KitBreadCrumbs kitTitle={selectedKit?.kitTitle} />
          </Grid>
          <Grid xs={10} paddingLeft={3}>
            <Stack direction="row" spacing={3}>
              <Box sx={{ width: 500, height: 300 }}>
                <Image
                  src={selectedKit?.src}
                  width={500}
                  height={300}
                  alt="KitImage"
                  quality={100}
                />
              </Box>
              <Box maxWidth={700}>
                <Typography
                  variant="h5"
                  style={{ marginRight: "1rem", marginBottom: "1rem" }}
                  color="common.black"
                  fontWeight={700}
                >
                  {selectedKit?.kitTitle}
                </Typography>
                <Box display="flex" alignItems="center">
                  <Rating
                    value={Math.floor(Math.random() * (5 - 0 + 1)) + 0}
                    readOnly
                  />
                  <Stack
                    direction="row"
                    alignItems="center"
                    padding="10px"
                    spacing={0.5}
                  >
                    <Typography
                      color="secondary.light"
                      component="legend"
                      fontSize={14}
                      fontWeight={700}
                    >
                      {selectedKit?.reviews}
                    </Typography>
                    <Typography
                      color="secondary.light"
                      component="legend"
                      fontSize={14}
                      fontWeight={700}
                    >
                      Reviews
                    </Typography>
                  </Stack>
                  <Divider orientation="vertical" flexItem />
                  <Stack
                    direction="row"
                    alignItems="center"
                    padding="10px"
                    spacing={0.5}
                  >
                    <Typography
                      color="textSecondary"
                      component="legend"
                      fontSize={14}
                      fontWeight={700}
                    >
                      {selectedKit?.suitableFor}
                    </Typography>
                  </Stack>
                  <Divider orientation="vertical" flexItem />
                  <Stack
                    direction="row"
                    alignItems="center"
                    padding="10px"
                    spacing={0.5}
                  >
                    <Typography
                      color="textSecondary"
                      component="legend"
                      fontSize={14}
                      fontWeight={700}
                    >
                      Part of:
                    </Typography>
                    <Typography
                      color="secondary.light"
                      component="legend"
                      fontSize={14}
                      fontWeight={700}
                    >
                      Play Kit Subscription
                    </Typography>
                  </Stack>
                </Box>
                <Stack marginBottom={3} marginTop={3}>
                  <Divider />
                </Stack>
                <Typography
                  variant="body2"
                  style={{ marginRight: "1rem" }}
                  color="textSecondary"
                  fontWeight="bold"
                >
                  {selectedKit?.kitDetails}
                </Typography>
                <Stack
                  direction="row"
                  alignItems="center"
                  marginBottom={1}
                  marginTop={1}
                >
                  <HandshakeIcon
                    sx={{
                      color: "secondary.main",
                      fin: "0.5rem",
                    }}
                  />
                  <Typography
                    color="textSecondary"
                    fontWeight="bold"
                    fontSize={14}
                  >
                    $80/kit, only available in the play kit subscription
                  </Typography>
                </Stack>

                <InputFields
                  today={today}
                  birthday={birthday}
                  setBirthday={setBirthday}
                />
                <Box display="flex" alignItems="center">
                  <BulletPointText text="Free shipping" />
                  <BulletPointText text="Cancel anytime" />
                  <BulletPointText text="Satisfaction guaranteed" />
                </Box>
              </Box>
            </Stack>
          </Grid>
          <Grid xs={10}>
            <Stack direction="row" alignItems="center" spacing={5}>
              <KitImageList
                kitData={kitData}
                setIndex={setIndex}
                index={index}
              />
              <Image
                src="/awards.jpg"
                width={400}
                height={80}
                alt="Example image"
                quality={100}
              />
            </Stack>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
};

export default PlayKitsPage;
