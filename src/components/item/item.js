import React, { Component } from 'react';

import {connect} from 'react-redux'

import { Container, Row, Col } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './item.css'

class Item extends Component {

    state={
        photo: null
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/photos/')
            .then((res) => res.json())
            .then((res) => res.slice(0, 20))
            .then((res) => {
                this.setState({
                    photo: res
                            })})
        }
        

    render() {
        let photos = this.state.photo
        return (
            <Container fluid>
                <Row className="justify-content-md-center mt-4 ">
                        {
                            photos && photos.map(el => {
                                const {id, title, url} = el;
                                return(
                                    <Row key={id} className="p-2">
                                        <Col>
                                            <img src={url} alt={`photo-${id}`}></img>
                                            <div className='div'>
                                                <p className='title'>{title}</p>
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

export default connect (mapStateToProps, mapDispatchToProps) (Item)