import React, { Component } from 'react';

import { connect } from "react-redux";
import { setUser } from "../../redux/action";

import { Container, Row, Card  } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

class Profile extends Component {
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
      res
        .json()
        .then((res) => res.slice(0, 1))
        .then((res) => {
          console.log(res)
          this.props.setUser(res);
        })
    );
  }

  render() {
    const user = this.props.usersAPI;
    console.log(user);
    return (
      <Container fluid>
        <Row className="justify-content-md-center mt-4 ">
          <>
            {user &&
              user.map((el) => {
                return (
                    <Card style={{ width: '18rem' }} key={el.id}>
                        <Card.Body>
                          <Card.Title>{el.name}</Card.Title>
                          <Card.Text>{el.address.street}</Card.Text>
                          <Card.Text>{el.address.suite}</Card.Text>
                        </Card.Body>
                    </Card>
                );
              })}
          </>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = ({ usersAPI }) => {
  return { usersAPI };
};

const mapDispatchToProps = { setUser };

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
