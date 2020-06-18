import React from 'react';
import Form from 'react-bootstrap/Form';
import right from '../helpers/right';

class LookupTable extends React.Component {

  constructor() {
    super();
    this.state = {
      placeholderText: 'Lookup Table',
      postColon: false,
      selected: false
    };

  }
 
  outputValue = () => {

  }

  autoFormatLookupTable = (e) => {
    // e.persist();
    // console.log(e);
    // console.log();
    if (e.type === 'mouseenter' && this.state.selected === false) {
      this.setState({placeholderText: '  :  '});
    } else if (e.type === 'mouseleave' && this.state.selected === false) {
      this.setState({placeholderText: 'Lookup Table'});
    } else if (e.type === 'focus') {
      this.setState({placeholderText: '  :  '});
      this.setState({selected: true});
    } else if (e.type === 'blur') {
      this.setState({placeholderText: 'Lookup Table'});
      this.setState({selected: false});
    } else if (e.type === 'change') {
      let tValue = e.target.value;
      if (right(tValue,1) === ' ' && this.state.postColon === false) {
        e.target.value += ': ';
        this.setState({postColon: true});
      }

      if (right(tValue,1) === '\n') {
        this.setState({postColon: false});
      }
      this.props.lookupTableValue(`{"${e.target.value.replace(/ : /gi, '":"').replace(/\n/gm,'","')}"}`);
    }
  }

  render() {
    const { placeholderText } = this.state;

    return (
      <Form.Control id="new-template-lookup_table" placeholder={placeholderText} type="text" as="textarea"
        onMouseEnter={(e) => this.autoFormatLookupTable(e)}
        onMouseLeave={(e) => this.autoFormatLookupTable(e)}
        onChange={(e) => this.autoFormatLookupTable(e)}
        onFocus={(e) => this.autoFormatLookupTable(e)}
        onBlur={(e) => this.autoFormatLookupTable(e)}
      ></Form.Control>
    )
  }
}

export default LookupTable;
