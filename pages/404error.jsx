import Layout from "@/src/layout/Layout";
const E404 = () => {
  return (
    <Layout noHeaderBg pageName={"error 404"}>
      <section
        className="error-page"
        style={{ backgroundImage: "url(assets/img/background.jpg)" }}
      >
        <div className="container">
          <div className="page-not">
            <h2>404</h2>
            <div>
              <h3>Page Not Found</h3>
              <h5>
                The page you are looking for doesn't exist or has been moved.
              </h5>
            </div>
          </div>
          <a href="#" className="themebtu mt-5">
            Go Back to Home
          </a>
        </div>
      </section>
    </Layout>
  );
};
export default E404;
