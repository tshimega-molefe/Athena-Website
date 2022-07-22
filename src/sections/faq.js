/** @jsx jsx */
import { jsx, Container, Box } from "theme-ui";
import SectionHeader from "components/section-header";
import Accordion from "components/accordion/accordion";
const faqs = [
  {
    title: "How do I create an account?",
    contents: (
      <div>
        Download the Athena app from the App Store or Google Play, then create
        an account with your email address and mobile phone number. A payment
        method is also needed before you can request ARES.
      </div>
    ),
  },
  {
    title: "Is Athena available in my city?",
    contents: (
      <div>You can find Athena in Johannesburg, Pretoria and Cape Town.</div>
    ),
  },
  {
    title: `How do I request ARES?`,
    contents: (
      <div>
        When you need help, open the app and request assistance from ARES.
        Confirm your request by tapping <strong>Confirm ARES</strong>.
      </div>
    ),
  },
  {
    title: `Should you trust the men and women of Athena?`,
    contents: (
      <div>
        It is the mission of Athena to safeguard the lives and property of the
        people we serve, to reduce the incidence and fear of crime, and to
        enhance public safety while working with the diverse communities to
        improve their quality of life. Our mandate is to do so with honor and
        integrity, while at all times conducting ourselves with the highest
        ethical standards to maintain public confidence.
      </div>
    ),
  },
];
export default function Faq() {
  return (
    <section sx={{ variant: "section.faq" }}>
      <Container>
        <SectionHeader
          title="Frequently asked questions"
          slogan="Answers to your questions"
        />
        <Box
          sx={{
            display: "flex",
            width: ["100%", null, null, "650px", "745px"],
            flexDirection: "column",
            mx: "auto",
            my: -4,
          }}
        >
          <Accordion items={faqs} />
        </Box>
      </Container>
    </section>
  );
}
