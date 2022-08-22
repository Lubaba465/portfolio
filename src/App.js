import React from 'react'
import Header from './components/Header_footer/header'
import './resources/styles.css'
/*import Featured from "../../../PhpstormProjects/portfolioLubaba/src/components/featured";
import Contact from "../../../PhpstormProjects/portfolioLubaba/src/components/contact";

import {Element} from 'react-scroll'*/
import AOS from 'aos';
import {BrowserRouter, BrowserRouter as Router, Route, Switch} from "react-router-dom";

import 'aos/dist/aos.css'; // You can also use <link> for styles
/*import Skills from "../../../PhpstormProjects/portfolioLubaba/src/components/Skills";
import Footer from '../../../PhpstormProjects/portfolioLubaba/src/components/Header_footer/footer'
import Projects from "../../../PhpstormProjects/portfolioLubaba/src/components/Projects";
import AllProjects from "../../../PhpstormProjects/portfolioLubaba/src/components/Allproject";*/
AOS.init();
function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Router>
                <Header
              />

              <main>

   {/*           <Switch>
                  <Route exact path="/" component={Featured} />
                  <Route exact path="/contact" component={Contact} />


                  <Route exact path="/portfolio" component={AllProjects} />
              </Switch>


              <footer>  <Footer/></footer>
                  */}
              </main>
          </Router>
          <>


          </>
         </header>
    </div>
  );
}

export default App;
