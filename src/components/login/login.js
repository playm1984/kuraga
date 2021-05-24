import React, { Component } from 'react';

import { Container, Row, Form, Button } from 'react-bootstrap';

import {connect} from 'react-redux'
import { logIn } from '../../redux/action'

import 'bootstrap/dist/css/bootstrap.min.css';

class Login extends Component {

    state={
        login: '',
        password: ''
    }

    handleChange = ({target}) => {
        this.setState({
            [target.name]: target.value 
        })
    }

    render() {

        const {login, password} = this.state;
        const {logIn} = this.props;

        return (
            <Container fluid>
                <Row className="justify-content-md-center mt-4 ">
                <form onSubmit = {(e) => {e.preventDefault();
                                    logIn({ login, password })
                                    }}>
                        <p>Введите данные</p>
                        <input type='text' name='login' placeholder='login' onChange = {this.handleChange}/>
                        <input type='text' name='password' placeholder='password' onChange = {this.handleChange}/>
                        <div className='btn'>
                            <button type='submit' name='btn1'>Войти</button>
                        </div>
                    </form>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = () => {
    return {}
}

const mapDispatchToProps = {
    logIn
}

export default connect (mapStateToProps, mapDispatchToProps)(Login);