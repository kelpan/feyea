/* eslint max-len: 0 */
/* eslint no-unused-vars: 0 */
import React from 'react';
import { BootstrapTable, TableHeaderColumn ,SizePerPageDropDown} from 'react-bootstrap-table';
import FlatButton from 'material-ui/FlatButton';

const Projects = [];

const createdbyType = {
  0: 'student',
  1: 'professor',
  2: 'company',
  3: 'alumni'
};

const statusType = {
  0: 'closed',
  1: 'open'
};

function dateFormatter(cell, row) {
  if (typeof cell !== 'object') {
    cell = new Date(cell);
  }

  return `${('0' + cell.getDate()).slice(-2)}/${('0' + (cell.getMonth() + 1)).slice(-2)}/${cell.getFullYear()}`;
}

function addProjects(quantity) {
  const startId = Projects.length;
  const startDate = new Date(2015, 0, 1);
  const endDate = new Date();
  for (let i = 0; i < quantity; i++) {
    const date = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
    const id = startId + i;
    Projects.push({
      id: id,
      name: 'Project title ' + id,
      status: Math.floor((Math.random() * 100) + 1)%2,
      createdby: Math.floor((Math.random() * 100) + 1) % 4,
      createDate: date,
      more: '&nbsp;'

    });
  }
}

addProjects(108);
//sort by date
let order='desc'


function enumFormatter(cell, row, enumObject) {
  return enumObject[cell];
}

function dateFormatter(cell, row) {
  if (typeof cell !== 'object') {
    cell = new Date(cell);
  }

  return `${('0' + cell.getDate()).slice(-2)}/${('0' + (cell.getMonth() + 1)).slice(-2)}/${cell.getFullYear()}`;
}

function moreFormatter(cell, row) {
  return `<a href="#/app/pl/ViewHistory">Show Details</a> ${cell}`;
}


const style = {
  sortdate: {

    right: 5,
    position: 'absolute'

  },
    addproject: {

    left: 260,
    position: 'fixed'
  },

};

//sort tine
$(document).ready(function(){
  $('#sortbytime').click(function() {
    var menu_text = $('#sortbytime').text().trim();
    if(menu_text=='Sort: Newest First')
      $("#sortbytime").text('Sort: Oldes First');
    else
      $("#sortbytime").text('Sort: Newest First');
  })
});

const satisfaction = [ 0, 1, 2, 3, 4, 5 ];

export default class AllFilters extends React.Component {


  constructor(props) {
    super(props);
  }

  handleBtnClick = () => {
    if (order === 'desc') {
      this.refs.table.handleSort('asc','createDate');
      order = 'asc';
    } else {
      this.refs.table.handleSort('desc', 'createDate');
      order = 'desc';

    }
  }


  render() {

    //pagation
    const options = {
      //page: 2,  // which page you want to show as default
      sizePerPage: 10,  // which size per page you want to locate as default
      pageStartIndex: 0, // where to start counting the pages
      paginationSize: 8,  // the pagination bar size.
      prePage: '<', // Previous page button text
      nextPage: '>', // Next page button text
      firstPage: '<<', // First page button text
      lastPage: '>>', // Last page button text
      prePageTitle: 'Go to previous', // Previous page button title
      nextPageTitle: 'Go to next', // Next page button title
      firstPageTitle: 'Go to first', // First page button title
      lastPageTitle: 'Go to Last', // Last page button title
      paginationShowsTotal: this.renderSizePerPageDropDown,  // Accept bool or function
      paginationPosition: 'bottom' , // default is bottom, top and both is all available
      ///keepSizePerPageState: true, ///default is false, enable will keep sizePerPage dropdown state(open/clode) when external rerender happened
      hideSizePerPage: true,//You can hide the dropdown for sizePerPage
      // alwaysShowAllBtns: true // Always show next and previous button
      // withFirstAndLast: false > Hide the going to First and Last page button
      hidePageListOnlyOnePage: true //> Hide the page list if only one page.
    };
    return (
      <article className="article">
        <h2 className="article-title" style={style.addproject}>Projects Listing</h2>
        <br/>
        <br/>


      <div >
        <button style={style.sortdate}
                className='btn btn-outline-danger '  id="sortbytime" onClick={ this.handleBtnClick } >Sort: Oldest First</button>
        <FlatButton  label="Clear Filter" primary={true} onClick={ this.handlerClickCleanFiltered.bind(this) }/>


        <BootstrapTable  ref='table' data={ Projects } pagination={true} options={options}>
          <TableHeaderColumn dataField='id' isKey={ true } width='10%'  dataAlign='center'>
            Project ID
          </TableHeaderColumn>
          <TableHeaderColumn dataSort={true} defaultASC
                             dataField='createDate' dataFormat={dateFormatter} width='19%'>
            Posting Date
          </TableHeaderColumn>
          <TableHeaderColumn ref='name1' dataField='name'   filter={ { type: 'TextFilter', placeholder: 'Enter Key Words' } }>Project Title</TableHeaderColumn>
          <TableHeaderColumn ref='status' dataField='status' width='15%' filter={ { type: 'SelectFilter', options: statusType } } dataFormat={ enumFormatter } formatExtraData={ statusType }>Status</TableHeaderColumn>
          <TableHeaderColumn ref='createdby' dataField='createdby' width='15%' filter={ { type: 'SelectFilter', options: createdbyType } } dataFormat={ enumFormatter } formatExtraData={ createdbyType }>I am</TableHeaderColumn>
          <TableHeaderColumn width='13%' dataField='more'  dataFormat={ moreFormatter  }></TableHeaderColumn>

        </BootstrapTable>

      </div>
      </article>
    );
  }

  handlerClickCleanFiltered() {
    this.refs.name1.cleanFiltered();
    this.refs.createdby.cleanFiltered();
    this.refs.status.cleanFiltered();

  }
}
