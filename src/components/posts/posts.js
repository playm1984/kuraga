import React, { Component } from 'react';

import {connect} from 'react-redux'

import { Container, Row, Col } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './posts.css'

class Posts extends Component {

    state={
        posts: null
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then((res) => res.json())
            .then((res) => res.slice(0, 20))
            .then((res) => {
                this.setState({
                    posts: res
                            })
                })
        }

    render() {
        let posts = this.state.posts
        return (
            <Container fluid>
                <Row className="justify-content-md-center mt-4 ">
                        {
                            posts && posts.map(el => {
                                const {id, title, body} = el;
                                return(
                                    <Row key={id} className="p-2">
                                        <Col>
                                            <div className='div'>
                                                <p className='title'>{title}</p>
                                                <p className='body'>{body}</p>
                                            </div>
                                        </Col>
                                    </Row>
                                )
                                }
                            )
                        }
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = () => {
    return {}
}

const mapDispatchToProps = {
}

export default connect (mapStateToProps, mapDispatchToProps) (Posts)