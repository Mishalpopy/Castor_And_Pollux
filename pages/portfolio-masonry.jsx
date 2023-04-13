import Layout from "@/src/layout/Layout";
import dynamic from "next/dynamic";
const PortfolioMasonryIsotope = dynamic(
  () => import("@/src/components/PortfolioMasonryIsotope"),
  {
    ssr: false,
  }
);
const PortfolioMasonry = () => {
  return (
    <Layout noHeaderBg pageName={"Portfolio 2"}>
      <section
        className="splash-area-section"
        style={{ backgroundImage: "url(assets/img/background.jpg)" }}
      >
        <div className="container">
          <div className="splash-area">
            <h2>We Love to Build Something Amazing</h2>
            <a href="#">Portfolio Grid</a>
          </div>
        </div>
      </section>
      <PortfolioMasonryIsotope />
    </Layout>
  );
};
export default PortfolioMasonry;
