import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {data} from "../../helpers/data"
import Skill from './Skill'

const Card = () => {
  return (
    <Container className="rounded-4 mt-4 p-4" style={{ background: "#f48b29" }}>
      <Row className='g-3 justify-content-center'>
        {data.map((skill,index) => {
          return (
            <Col sm={6} md={4} lg={3} key={index}>
              <Skill {...skill}/>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default Card