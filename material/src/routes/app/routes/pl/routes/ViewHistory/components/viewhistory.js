





import React from 'react';
import QueueAnim from 'rc-queue-anim';
import ReactTooltip from 'react-tooltip'

import ReactDOM from "react-dom";
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn, TableFooter} from 'material-ui/Table';

/*
const Projects = () => (
  <article className="article">
    <h2 className="article-title">Projects Listing</h2>
    <div className="box box-default table-box table-responsive mdl-shadow--2dp">
      <table className="mdl-data-table">
        <thead>
        <tr>
          <th className="mdl-data-table__cell--non-numeric">#</th>
          <th className="mdl-data-table__cell--non-numeric">Code</th>
          <th className="mdl-data-table__cell--non-numeric">Material</th>
          <th>Quantity</th>
          <th>Unit price</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td className="mdl-data-table__cell--non-numeric">1</td>
          <td className="mdl-data-table__cell--non-numeric">AZ90</td>
          <td className="mdl-data-table__cell--non-numeric">Acrylic (Transparent)</td>
          <td>25</td>
          <td>$2.90</td>
        </tr>
        <tr>
          <td className="mdl-data-table__cell--non-numeric">2</td>
          <td className="mdl-data-table__cell--non-numeric">BC30</td>
          <td className="mdl-data-table__cell--non-numeric">Plywood (Birch)</td>
          <td>50</td>
          <td>$1.25</td>
        </tr>
        <tr>
          <td className="mdl-data-table__cell--non-numeric">3</td>
          <td className="mdl-data-table__cell--non-numeric">DL32</td>
          <td className="mdl-data-table__cell--non-numeric">Laminate (Gold on Blue)</td>
          <td>10</td>
          <td>$2.35</td>
        </tr>
        </tbody>
      </table>
    </div>
  </article>
);

*/
// Cmplex example


const tableData = [
  {
    projectID: '0',
    projectTitle:'ECE496 project finder',
    howManyMembers: '4',
    createdBy: 'student',
    createDate: 'Saturday, September 24, 2016 5:02 PM',
    relatedArea: 'Software, Hardware'


  }
];

const Projects = () => (
  <article className="article">
    <h2 className="article-title">Projects Listing</h2>
    <div className="box box-default table-box table-responsive mdl-shadow--2dp">
      <table className="mdl-data-table">
        <thead>
        <tr>
          <th className="mdl-data-table__cell--non-numeric">project ID</th>
          <th className="mdl-data-table__cell--non-numeric">project Title</th>
          <th className="mdl-data-table__cell--non-numeric">Members/Group</th>
          <th className="mdl-data-table__cell--non-numeric">creator</th>
          <th className="mdl-data-table__cell--non-numeric">Create Date</th>
          <th className="mdl-data-table__cell--non-numeric">Related Area</th>


        </tr>
        </thead>
        <tbody>

        {tableData.map((row,index) => (
          <tr>
            <td className="mdl-data-table__cell--non-numeric">{row.projectID}</td>
            <td className="mdl-data-table__cell--non-numeric" ><a href="#/app/pl/ViewHistory">{row.projectTitle}</a></td>


            <td className="mdl-data-table__cell--non-numeric">{row.howManyMembers} </td>
            <td className="mdl-data-table__cell--non-numeric">{row.createdBy} </td>
            <td className="mdl-data-table__cell--non-numeric">{row.createDate} </td>
            <td className="mdl-data-table__cell--non-numeric">{row.relatedArea} </td>



          </tr>
        ))}

        </tbody>
      </table>
    </div>
  </article>
);

const Page = () => (
  <section className="container-fluid with-maxwidth chapter">
    <QueueAnim type="bottom" className="ui-animate">
      <div key="1"><Projects /></div>

    </QueueAnim>
  </section>
);

module.exports = Page;
