import React  from 'react';
import projects from '../../data/projects.json'

import ProjectComponents from './projectComponents'

import {Link} from "react-router-dom";


const AllProjects =() => {







    const handleShowStripe = () => (

        projects.map((project,index)=>{

    if(index >= 2) {return null}
    else{
         return   <ProjectComponents

float={project.float}
                title={project.title}
id={project.pId}
content={project.content}
more={project.more}
btn={project.btn}



            >


            </ProjectComponents





            >


    }}));

    return(
        <div className="highlight_wrapper">

       <h1 className="projects-section__Heading-sc-1r8qvbm-1 piqbM"><span
                className="SplashText__SplashTextStyles-sc-17ii5cd-0 onayw">Projects</span></h1>
            <div className="projects" > {handleShowStripe()}
                <div className="viewal" style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                    <Link to="/portfolio/projects"> <button className= "vll" style={vAllBtn}>Mehr anzeigen</button></Link>
                </div>
            </div>


        </div>


    )
}
const vAllBtn = {
    marginRight: '400px',
    width:'120px',
    height:'45px',
    border:'none',
    borderRadius:'10px',
    cursor:'pointer',
    color:'grey'
}


export default AllProjects;