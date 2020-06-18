import React from 'react';
import axios from 'axios';
import ajaxPath from '../helpers/ajax';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import LookupTable from './LookupTable';

class Templates extends React.Component {

  constructor() {
    super();
    this.state = {
      savedTemplates: [],
      selectedTemplate: '',
      addTemplateActive: false,
      lookupTable: ''
    }
  }

  getTemplates = () => {
    axios.get(ajaxPath('templates'))
    .then((res) => {
      this.setState({savedTemplates: res.data});
    })
    .catch((err) => console.log(err));
  }

  postTemplate = (e) => {
    const { lookupTable } = this.state;
    const postJSON = {"template":{"name":e.target[0].value,"topic":e.target[1].value,"content":e.target[2].value,"lookup_table":lookupTable}};
    // console.log('postJSON',postJSON);
    axios.post(ajaxPath('templates'), postJSON)
    .then((res) => {
      this.getTemplates();
      this.setState({addTemplateActive: false})
    })
    .catch((err) => console.log(err));
    e.preventDefault();
  }

  templateSelected = (e) => {
    console.log(e.target);
  }

  addTemplate = () => {
    this.setState({addTemplateActive: true});
  }

  lookupTableValue = (outputValue) => {
    this.setState({lookupTable: outputValue});
  }

  componentDidMount() {
    this.getTemplates();
  }


  render() {
    const { savedTemplates, addTemplateActive } = this.state;

    return (
      <Card>
        <Card.Body>
          <Card.Title>Templates</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          { addTemplateActive ?
            <Form onSubmit={(e) => this.postTemplate(e)}>
              <Form.Control id="new-template-name" placeholder="Name" type="text" as="input"></Form.Control><br />
              <Form.Control id="new-template-topic" placeholder="Topic" type="text" as="input"></Form.Control><br />
              <Form.Control id="new-template-content" placeholder="Content" type="text" as="textarea"></Form.Control><br />
              <LookupTable lookupTableValue={this.lookupTableValue} />
              <br />
              <Button variant="primary" type="submit">Add</Button>
            </Form>
            :
            <ListGroupItem action onClick={(e) => this.addTemplate()}><span className="fa-stack fa-xs"><i className="far fa-stack-2x fa-circle"></i><i className="fas fa-stack-1x fa-plus"></i></span>&nbsp;New Template</ListGroupItem>
          }
          {savedTemplates.map((template,index) => <ListGroupItem action key={index} onClick={(e) => this.templateSelected(e)} data-itemid={template['id']}>{template['name']}</ListGroupItem>)}
        </ListGroup>
      </Card>
    )
  }
}

export default Templates;

// Cover Letter Template

// --

// Dear Hiring Manager:

// I am writing to apply for the position of [Job_Title]. I have received a certification in Full-Stack Web Development from George Washington University.  Additionally, with my three years of experience in electrical engineering and a year and a half of cooperative education experience at Drexel University giving me a solid foundation, you will not find another candidate that has a stronger desire to work in this industry. I am proficient in the Korean language and I have a strong understanding of the Korean culture. If I am fortunate enough to be hired for a position in this field, I know I will be able to make a positive contribution in a short amount of time.

// I hope to get the opportunity for a live interview so I can learn more about working at [Company_Name] and so you can learn more about me and my skill sets.

// Thank you for your consideration.
// Patrick Lyden

// --

// {"Job_Title":"job_title","Company_Name":"company"}