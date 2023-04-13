import Head from "next/head";
import { Fragment } from "react";
import ImageView from "../components/ImageView";
import VideoPopup from "../components/VideoPopup";
import Footer from "./Footer";
import Header from "./Header";
import ScrollTop from "./ScrollTop";
const Layout = ({
  children,
  headerExtraClass,
  noHeaderBg,
  blackLogo,
  pageName,
}) => {
  return (
    <Fragment>
      <Head>
        <title>Terio - {pageName}</title>
      </Head>
      <VideoPopup />
      <ImageView />
      <Header
        headerExtraClass={headerExtraClass}
        noHeaderBg={noHeaderBg}
        blackLogo={blackLogo}
      />
      {children}
      <Footer />
      <ScrollTop />
    </Fragment>
  );
};
export default Layout;
