import React from 'react';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

const FLAVOURS = [
  { label: 'Software', value: 'Software' },
  { label: 'Hardware', value: 'Hardware' },
  { label: 'Digital', value: 'Digital' },
  { label: 'SIgnal', value: 'SIgnal' },
  { label: 'Electronic', value: 'Electronic' },
];

const WHY_WOULD_YOU = [
  { label: 'Software (are you crazy?)', value: 'Software', disabled: true },
].concat(FLAVOURS.slice(1));

var MultiSelectField = createClass({
  displayName: 'MultiSelectField',
  propTypes: {
    label: PropTypes.string,
  },
  getInitialState () {
    return {
      removeSelected: false,
      disabled: false,
      crazy: false,
      stayOpen: false,
      value: [],
      rtl: false,
    };
  },
  handleSelectChange (value) {
    console.log('You\'ve selected:', value);
    this.setState({ value });
  },
  toggleCheckbox (e) {
    this.setState({
      [e.target.name]: e.target.checked,
    });
  },
  toggleRtl (e) {
    let rtl = e.target.checked;
    this.setState({ rtl });
  },

  render () {
    const { crazy, disabled, stayOpen, value } = this.state;
    const options = crazy ? WHY_WOULD_YOU : FLAVOURS;
    return (
      <div className="section">
        <Select
          closeOnSelect={stayOpen}
          disabled={disabled}
          multi
          onChange={this.handleSelectChange}
          options={options}
          placeholder="Related Area(s)"
          removeSelected={false}
          rtl={this.state.rtl}
          simpleValue
          value={value}
        />

      </div>
    );
  }
});
module.exports = MultiSelectField;

