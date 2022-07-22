/** @jsx jsx */
import { jsx, Container, Box } from "theme-ui";
import TextFeature from "components/text-feature";
import Image from "components/image";

import Partner from "assets/partner.png";

const data = {
  subTitle: "Our objective",
  title: "It always seems impossible, until it is done",
  description:
    "Borne from the current climate of rampant femicide, gender-based violence, and crime across South Africa, Athena was created to bring a visonary solution and powerful network to tackle a long-standing problem in all of our communities. Our hardware, software and services work together to serve and protect you, your family and friends at all times. ",
  btnName: "Coming Soon",
  btnURL: "#",
};

export default function PartnerSection() {
  return (
    <section sx={{ variant: "section.partner" }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle={data.subTitle}
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
          />
        </Box>
        <Box sx={{ px: [0, null, "40px", 0] }}>
          <Image src={Partner} alt="Partner" />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: ["wrap", null, null, "nowrap"],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, "30px", 0],
    textAlign: ["center", null, null, "left"],
    width: ["100%", 450, 550, "350px", "410px", "485px"],
    mx: "auto",
    pb: ["30px", null, null, 0],
    ".description": {
      pr: [0, null, null, null, 4],
    },
  },
};
