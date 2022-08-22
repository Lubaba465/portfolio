import React from 'react'
import Header from './components/Header_footer/header'
import './resources/styles.css'
import Featured from "./components/featured";
import Contact from "./components/contact";

import {Element} from 'react-scroll'
import AOS from 'aos';
import { BrowserRouter as Router, Route,   Switch} from "react-router-dom";

import 'aos/dist/aos.css'; // You can also use <link> for styles
import Footer from './components/Header_footer/footer'
import Projects from "./components/Projects";

import AllProjects from "./components/Allproject";

AOS.init();
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Router>
                    <Header
                    />

                    <main>

                        <Switch>
                            <Route exact path="/portfolio" component={Featured} />

                            <Route exact path="/portfolio/contact" component={Contact} />



                            <Route exact path="/portfolio/projects" component={AllProjects} />
                        </Switch>
                    </main>

                    <footer>  <Footer/></footer>

                </Router>
                <>


                </>
            </header>
        </div>
    );
}

export default App;