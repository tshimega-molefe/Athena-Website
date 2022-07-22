/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "../components/section-header";
import FeatureCardColumn from "components/feature-card-column.js";
import Evidence from "assets/key-feature/evidence.svg";
import Location from "assets/key-feature/location.svg";
import Ares from "assets/key-feature/ares.svg";

const data = [
  {
    id: 1,
    imgSrc: Ares,
    altText: "Emergency Response",
    title: "Emergency Response",
    text: "South Africa’s most advanced emergency response network.",
  },
  {
    id: 2,
    imgSrc: Location,
    altText: "Location Monitoring",
    title: "Location Monitoring",
    text: "Live location monitoring to reach you anywhere in real-time.",
  },

  {
    id: 3,
    imgSrc: Evidence,
    altText: "Evidence Collection",
    title: "Evidence Collection",
    text: "We collect data and footage from all incidents as digital evidence.",
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: "section.keyFeature" }} id="feature">
      <Container>
        <SectionHeader
          slogan="Quality features"
          title="Safety first, second and third"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
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
    px: [0, null, null, "40px", null, "80px"],
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: ["35px 0", null, "40px 0"],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(3,1fr)",
    ],
    width: ["100%", "80%", "100%"],
    mx: "auto",
    "& > div": {
      px: [0, "15px", null, "25px", null, "30px", "40px", "60px"],
    },
  },
};
