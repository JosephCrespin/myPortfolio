import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/header.component';
import HomePage from './components/HomePage/homepage.component';
import Blog from './components/Blog/blog.component';
import Footer from './components/Footer/footer.component';
import { Helmet } from 'react-helmet';
// script.js



class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet htmlAttributes>
          {/* <!-- Primary Meta Tags --> */}
          <title>JosephCrespin</title>
          <meta name='title' content='Joseph' />
          <meta
            name='description'
            content="Aguacate's Web Developer Portfolio."
          />
  
        <div class="nes-pointer"></div>
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
