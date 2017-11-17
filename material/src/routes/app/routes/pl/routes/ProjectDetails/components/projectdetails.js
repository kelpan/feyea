import React from 'react';
import QueueAnim from 'rc-queue-anim';
import ReactTooltip from 'react-tooltip'

import ReactDOM from "react-dom";
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn, TableFooter} from 'material-ui/Table';

const projectData = [
	  {
	    projectID: '0',
	    projectTitle:'ECE496 project finder',
	    howManyMembers: '4',
	    createdBy: 'student',
	    createDate: 'Saturday, September 24, 2016 5:02 PM',
	    relatedArea: 'Software, Hardware'


	  }
	];

const Hero = () => (
		  <section className="hero">
		    <div className="hero-content">
		      <h1 className="hero-title">ECE496 project finder</h1>
		    </div>
		    <p className="text-muted">Saturday, September 24, 2016 5:02 PM by student</p>
		  </section>
		);

const ProjectDetails = () => (
		 <article className="article padding-lg-v article-dark article-bordered">

		    <div className="container-fluid with-maxwidth-sm">

		      <h4>Project Status</h4>
		      <p>Open, accept 2-4 team members</p>
		      
		      <h4>Related Area</h4>
		      <p>Software, Hardware</p>
		      
		      <h4>Description</h4>
		      <p>This will be the long long description.This will be the long long description.This will be the long long description.This will be the long long description.This will be the long long description.This will be the long long description.This will be the long long description.This will be the long long description.This will be the long long description.This will be the long long description.This will be the long long description.This will be the long long description.This will be the long long description.This will be the long long description.This will be the long long description.This will be the long long description.This will be the long long description.This will be the long long description.This will be the long long description.This will be the long long description.This will be the long long description.This will be the long long description.This will be the long long description.This will be the long long description.This will be the long long description.</p>

		      <h4>Liked by</h4>

		      <h4>Discussion Area</h4>
		      
		      <h4>Projects you may also like...</h4>
		      
		    </div>
  </article>
);


const Page = () => (
  <section className="chapter page-terms">
    <QueueAnim type="bottom" className="ui-animate">
      <div key="1"><Hero /></div>
      <div key="2"><ProjectDetails /></div>
    </QueueAnim>
  </section>
);

module.exports = Page;
