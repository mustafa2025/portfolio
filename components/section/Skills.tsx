// react
import * as React from "react";
import Image from "next/image";
// @mui
import {
  Container,
  ContainerProps,
  Grid,
  GridProps,
  Typography,
  styled,
} from "@mui/material";
// custom component
import ContainerGrid from "components/common/ContainerGrid";
import SkillProgress from "components/common/SkillProgress";
// custom icons
// context
import ComponentsContext from "context/componentsContext";
// type
interface SkillsProps {}

const CustomContainer = styled(Container)<ContainerProps>(({ theme }) => ({
  marginBottom: "5rem",
  marginTop: "5rem",
  scrollMarginTop: "2rem",
}));

const CustomGridItem = styled(Grid)<GridProps>(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  marginBottom: "2rem",
}));

const Skills: React.FunctionComponent<SkillsProps> = (props) => {
  const { containerMaxWidth } = React.useContext(ComponentsContext);

  const skills = [
    {
      Icon: (
        <Image
          alt="Mustafa profile image"
          layout="fill"
          objectFit="cover"
          objectPosition="center center"
          // onLoad={() => setIsLoaded(true)}
          src="/javascript.png"
        />
      ),
      title: "JavaScript",
    },
    {
      Icon: (
        <Image
          alt="Mustafa profile image"
          layout="fill"
          objectFit="cover"
          objectPosition="center center"
          // onLoad={() => setIsLoaded(true)}
          src="/react.png"
        />
      ),
      title: "React",
    },
    {
      Icon: (
        <Image
          alt="Mustafa profile image"
          layout="fill"
          objectFit="cover"
          objectPosition="center center"
          // onLoad={() => setIsLoaded(true)}
          src="/node.png"
        />
      ),
      title: "NodeJS",
    },
  ];

  return (
    <>
      <CustomContainer id="skills" maxWidth={containerMaxWidth}>
        <Typography component="h2" variant="h4" textAlign="center">
          My Skills
        </Typography>
        <ContainerGrid marginTop="2rem">
          {skills.map((skill, index) => (
            <CustomGridItem
              item
              key={`${skill.title} - ${skill.progressValue} - ${index}`}
              xs={12}
              sm={6}
              md={4}
            >
              <SkillProgress
                size={100}
                value={skill.progressValue}
                Icon={skill.Icon}
                subtitle={`${skill.title}  
                 `}
              />
            </CustomGridItem>
          ))}
        </ContainerGrid>
      </CustomContainer>
    </>
  );
};

export default Skills;
