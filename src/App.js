import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/header.component';
import HomePage from './components/HomePage/homepage.component';
import Blog from './components/Blog/blog.component';
import Footer from './components/Footer/footer.component';
import { Helmet } from 'react-helmet';
import luciSEO from './images/luciSEO.png';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet htmlAttributes>
          {/* <!-- Primary Meta Tags --> */}
          <title>JosephCrespin</title>
          <meta name='title' content='Luci Codes' />
          <meta
            name='description'
            content="Lucía Martínez's Web Developer Portfolio."
          />

          {/* <!-- Open Graph / Facebook --> */}
          <meta property='og:type' content='website' />
          <meta property='og:url' content='https://luci.codes/' />
          <meta property='og:title' content='Luci Codes' />
          <meta
            property='og:description'
            content="Lucía Martínez's Web Developer Portfolio."
          />
          <meta property='og:image' content={luciSEO} />

          {/* <!-- Twitter --> */}
          <meta property='twitter:card' content='summary_large_image' />
          <meta property='twitter:url' content='https://luci.codes/' />
          <meta property='twitter:title' content='Luci Codes' />
          <meta
            property='twitter:description'
            content="Lucía Martínez's Web Developer Portfolio."
          />
          <meta property='twitter:image' content={luciSEO} />
        </Helmet>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/blog' component={Blog} />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
