import React from 'react';
import axios from 'axios';
import ajaxPath from '../helpers/ajax';
import filterJSONArr from '../helpers/filterJSONArr';
import jsonArrKeyValueCompile from '../helpers/jsonArrKeyValueCompile';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Form from 'react-bootstrap/Form';

class Data extends React.Component {

  constructor() {
    super();
    this.state = {
      savedData: [],
      currentTopic: 'test',
      allTopics: []
    };
  }

  getData = () => {
    axios.get(ajaxPath('data'))
    .then((res) => {
      this.setState({savedData: res.data});
    })
    .catch((err) => console.log(err));
  }

  getTemplates = () => {
    axios.get(ajaxPath('templates'))
    .then((res) => {
      this.setState({allTopics: jsonArrKeyValueCompile(res.data)});
    })
    .catch((err) => console.log(err));
  }

  topicChange = (e) => {
    this.setState({currentTopic: e['target']['selectedOptions'][0].value});
  }

  componentDidMount() {
    this.getData();
    this.getTemplates();
  }

  render() {
    const { savedData, currentTopic, allTopics } = this.state;

    console.log(jsonArrKeyValueCompile(savedData,'topic'),filterJSONArr(savedData,'topic',currentTopic));

    return (
      <Card>
        <Card.Body>
          <Card.Title>Data</Card.Title>
          <Form.Group>
            <Form.Control as="select" placeholder="Topic" onChange={(e) => this.topicChange(e)} custom>
              <option>Topic</option>
              {allTopics.map((topic,index) => <option key={index}>{topic}</option>)}
            </Form.Control>
          </Form.Group>
        </Card.Body>
        <ListGroup className="list-group-flush">
          {filterJSONArr(savedData,'topic',currentTopic).map((data,index) => <ListGroupItem action key={index}></ListGroupItem>)}
        </ListGroup>
      </Card>
    )
  }
}

export default Data;
