import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { MdMonitor,MdLeaderboard } from "react-icons/md";
import { CiCircleAlert } from "react-icons/ci";
import { TbReport } from "react-icons/tb";
import Container from 'react-bootstrap/esm/Container';

function Dash() {
  return (
    <>
    <Container className='mx-auto mb-5'>
    <Row xs={1} md={2} className="g-4 m-3">
        <Col>
          <Card bg='primary' className='border rounded-5' style={{"boxShadow":"10px 10px lightblue"}}>
            <Card.Header className='mx-auto border-0 bg-primary'><MdMonitor style={{"width":"100px","height":"100px"}} /></Card.Header>
            <Card.Body className='mx-auto'>
              <Card.Title className='fs-3'>Live Monitoring</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card bg='danger' className='border rounded-5' style={{"boxShadow":"10px 10px #CB4354"}}>
            <Card.Header className='mx-auto border-0 bg-danger'><CiCircleAlert style={{"width":"100px","height":"100px"}} /></Card.Header>
            <Card.Body className='mx-auto'>
              <Card.Title className='fs-3'>Alerts</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card bg='success' className='border rounded-5' style={{"boxShadow":"10px 10px #6BB576"}}>
            <Card.Header className='mx-auto border-0 bg-success'><MdLeaderboard style={{"width":"100px","height":"100px"}} /></Card.Header>
            <Card.Body className='mx-auto'>
              <Card.Title className='fs-3'>Leaderboard</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card bg='warning' className='border rounded-5' style={{"boxShadow":"10px 10px #C3C765"}}>
            <Card.Header className='mx-auto border-0 bg-warning'><TbReport style={{"width":"100px","height":"100px"}} /></Card.Header>
            <Card.Body className='mx-auto'>
              <Card.Title className='fs-3'>Report Generation</Card.Title>
            </Card.Body>
          </Card>
        </Col>
    </Row>
    </Container>
    </>
  )
}

export default Dash
