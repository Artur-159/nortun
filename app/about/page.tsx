import About from "../../features/about";

export async function generateMetadata() {
  return {
    title: "About",
  };
}

const AboutPage = async () => {
  return <About title="About us" />;
};

export default AboutPage;
