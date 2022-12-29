// react
import * as React from "react";
// next
import Image from "next/image";
// @mui
import {
  Box,
  BoxProps,
  Card,
  CardActions,
  CardActionsProps,
  CardProps,
  Grid,
  Skeleton,
  Typography,
  styled,
  CardContent,
  Collapse,
  useMediaQuery,
  useTheme,
} from "@mui/material";
// custom component
import FacebookIconLink from "components/common/FacebookIconLink";
import InstagramIconLink from "components/common/InstagramIconLink";
import TwitterIconLink from "components/common/TwitterIconLink";
import ContainerGrid from "components/common/ContainerGrid";
import ExpandMoreIconButton from "components/common/ExpandMoreIconButton";
// type
interface AboutProps {}

const ImageWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "21rem",
  [theme.breakpoints.up(350)]: {
    height: "26rem",
  },
  [theme.breakpoints.up("sm")]: {
    height: "50vh",
  },
  [theme.breakpoints.up("md")]: {
    height: "100%",
  },
}));

const CustomContainer = styled(Box)<BoxProps>(({ theme }) => ({
  scrollMarginTop: "1rem",
  [theme.breakpoints.up("sm")]: {
    scrollMarginTop: "2rem",
  },
}));

const CustomCard = styled(Card)<CardProps>(({ theme }) => ({
  margin: "1rem",
  overflow: "hidden",
  [theme.breakpoints.up("sm")]: {
    margin: "2rem",
  },
  [theme.breakpoints.up("md")]: {
    height: "fit-content",
  },
  [theme.breakpoints.up("lg")]: {
    height: "90vh",
  },
}));

const CustomCardActions = styled(CardActions)<CardActionsProps>(
  ({ theme }) => ({
    justifyContent: "space-between",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      justifyContent: "flex-end",
    },
    [theme.breakpoints.up("lg")]: {
      position: "absolute",
      bottom: 0,
    },
  })
);

const About: React.FunctionComponent<AboutProps> = (props) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [showMore, setShowMore] = React.useState(false);

  const theme = useTheme();
  const isUpMd = useMediaQuery(theme.breakpoints.up("md"));

  React.useEffect(() => {
    if (isUpMd) setShowMore(true);
    else setShowMore(false);
  }, [isUpMd]);

  return (
    <CustomContainer id="about">
      <CustomCard>
        <ContainerGrid sx={{ marginTop: 0, height: "100%" }}>
          <Grid item xs={12} md={6} style={{ padding: 0 }}>
            <ImageWrapper>
              <Image
                alt="Mustafa profile image"
                layout="fill"
                objectFit="cover"
                objectPosition="center center"
                onLoad={() => setIsLoaded(true)}
                src="/profile.jpeg"
              />
              {!isLoaded && (
                <Skeleton
                  variant="rectangular"
                  sx={{
                    backgroundColor: "currentcolor",
                    height: "100%",
                    position: "absolute",
                    width: "100%",
                  }}
                />
              )}
            </ImageWrapper>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            style={{ padding: "2rem", position: "relative" }}
          >
            <Card
              sx={{ boxShadow: "none", height: "100%", position: "relative" }}
            >
              <Typography component="h2" variant="h5" fontWeight="bold">
                A bit about me
              </Typography>
              <CardContent>
                <Typography component="p" variant="body1">
                  Hi there! My name is Mustafa and I am a fullstack developer
                  with a passion for building web applications that solve
                  real-world problems. I have been working in the tech industry
                  for 3 years. Throughout my career, I have gained experience in
                  a variety of technologies, including Next.js and MongoDB. In
                  my current role as a fullstack developer, I am responsible for
                  designing and building web applications from start to finish,
                  including everything from the front-end user interface to the
                  back-end server-side logic. I am skilled in both front-end
                  technologies like HTML, CSS, and JavaScript, as well as
                  back-end technologies like Node.js, Express, and MongoDB. In
                  addition to my technical skills, I am a strong communicator
                  and thrive in collaborative environments. I am always eager to
                  learn and am constantly seeking out new challenges to improve
                  my skills and grow as a developer.
                </Typography>
                <Collapse
                  in={showMore}
                  sx={{
                    p: {
                      marginTop: "0.5rem",
                    },
                  }}
                  timeout="auto"
                  unmountOnExit
                >
                  <Typography component="p" variant="body1">
                    If you have a project that you think I would be a good fit
                    for, I would love to hear from you! Feel free to reach out
                    to me via my contact information listed below.
                  </Typography>
                </Collapse>
              </CardContent>
              <CustomCardActions disableSpacing>
                {!isUpMd && (
                  <ExpandMoreIconButton
                    open={showMore}
                    onClick={() => setShowMore(!showMore)}
                    sx={{
                      justifySelf: "flex-start",
                    }}
                  />
                )}
              </CustomCardActions>
            </Card>
          </Grid>
        </ContainerGrid>
      </CustomCard>
    </CustomContainer>
  );
};

export default About;
