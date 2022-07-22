/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import FeatureCard from "components/feature-card.js";
import Demand from "assets/feature/demand.svg";
import Technology from "assets/feature/technology.svg";
import Wanted from "assets/feature/wanted.svg";
import Mapping from "assets/feature/mapping.svg";
import Integration from "assets/feature/integration.svg";
import Support from "assets/feature/support.svg";

const data = [
  {
    id: 1,
    imgSrc: Technology,
    altText: "Technology",
    title: "Latest Technology",
    text: "AI and Machine Learning powers our superior service.",
  },
  {
    id: 2,
    imgSrc: Demand,
    altText: "Demand",
    title: "Security on Demand",
    text: "Request help at any time and on any day of the year.",
  },
  {
    id: 3,
    imgSrc: Wanted,
    altText: "Wanted",
    title: "Most Wanted",
    text: "View the most wanted suspects in your area.",
  },
  {
    id: 4,
    imgSrc: Mapping,
    altText: "Mapping",
    title: "Crime Mapping",
    text: "Get real-time crime notifications in your neighborhood.",
  },
  {
    id: 5,
    imgSrc: Integration,
    altText: "Integration",
    title: "Hardware Integration",
    text: "Athena integrates with your home and vehicle security systems.",
  },
  {
    id: 6,
    imgSrc: Support,
    altText: "Support",
    title: "Customer Support",
    text: "Get 24/7 support in the app if you need counselling, legal or medical help.",
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: "section.feature" }}>
      <Container>
        <SectionHeader
          slogan="Our software"
          title="With great power comes great security"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: [
      "37px 0",
      null,
      "45px 30px",
      null,
      "50px 30px",
      null,
      null,
      "90px 70px",
    ],
    width: ["100%", "80%", "100%"],
    mx: "auto",
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(3,1fr)",
    ],
  },
};
