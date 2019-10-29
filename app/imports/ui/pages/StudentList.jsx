import React from 'react';
import { Container, Header, Table } from 'semantic-ui-react';
//  import { Student } from '/imports/api/studentdata/StudentData';
//  import {Enrollment} from '/imports/api/enrollmentdata/EnrollmentData';


/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class StudentList extends React.Component {


  /** Render the page once subscriptions have been received. */
  render() {
    return (
        <Container>
          <Header as="h2" textAlign="center">List Stuff (Admin)</Header>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Quantity</Table.HeaderCell>
                <Table.HeaderCell>Condition</Table.HeaderCell>
                <Table.HeaderCell>Owner</Table.HeaderCell>
                <Table.HeaderCell>value</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.props.stuffs.map((stuff) => <StuffItemAdmin key={stuff._id} stuff={stuff} />)}
            </Table.Body>
          </Table>
        </Container>
    );
  }
}

export default StudentList;
