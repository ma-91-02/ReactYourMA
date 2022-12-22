import React, { Component, Fragment } from "react";
// import {withRouter } from "react-router-dom";
import "./App.css";

import Layout from "./components/Layout/Layout";
const Backdrop = React.lazy(() => import("./components/Backdrop/Backdrop"));
const Toolbar = React.lazy(() => import("./components/Toolbar/Toolbar"));
const MainNavigation = React.lazy(() =>
  import("./components/Navigation/MainNavigation/MainNavigation")
);
const MobileNavigation = React.lazy(() =>
  import("./components/Navigation/MobileNavigation/MobileNavigation")
);
const Landing = React.lazy(() => import("./pages/Landing"));
const Up = React.lazy(() => import("./components/up/Up"));

const Events = React.lazy(() => import("./pages/Events"));
const Pricing = React.lazy(() => import("./pages/Pricing"));
const Features = React.lazy(() => import("./pages/Features"));
const Gallery = React.lazy(() => import("./pages/gallery/Gallery"));

const Team = React.lazy(() => import("./pages/team/Team"));
const Services = React.lazy(() => import("./pages/services/Services"));
const Skills = React.lazy(() => import("./pages/skills/Skills"));
const Work = React.lazy(() => import("./pages/work/Work"));

const Footer = React.lazy(() => import("./pages/Footer"));
const ErrorHandler = React.lazy(() =>
  import("./components/ErrorHandler/ErrorHandler")
);

class App extends Component {
  state = {
    showBackdrop: false,
    showMobileNav: false,
  };

  mobileNavHandler = (isOpen) => {
    this.setState({ showMobileNav: isOpen, showBackdrop: isOpen });
  };

  backdropClickHandler = () => {
    this.setState({ showBackdrop: false, showMobileNav: false, error: null });
  };

  render() {
    return (
      <Fragment>
        {this.state.showBackdrop && (
          <Backdrop onClick={this.backdropClickHandler} />
        )}
        <ErrorHandler error={this.state.error} onHandle={this.errorHandler} />
        <Layout
          header={
            <Toolbar>
              <MainNavigation
                onOpenMobileNav={this.mobileNavHandler.bind(this, true)}
                onLogout={this.logoutHandler}
                onChooseItem={this.mobileNavHandler.bind(this, false)}
                isAuth={this.state.isAuth}
              />
            </Toolbar>
          }
          mobileNav={
            <MobileNavigation
              open={this.state.showMobileNav}
              mobile
              onChooseItem={this.mobileNavHandler.bind(this, false)}
              onLogout={this.logoutHandler}
              isAuth={this.state.isAuth}
            />
          }
        />
        <Landing />
        <Events />
        <Pricing />
        <Features />
        <Gallery />
        <Team />
        <Services />
        <Skills />
        <Work />
        <Up />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
