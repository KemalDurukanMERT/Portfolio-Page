import React from 'react'
import { Container } from 'react-bootstrap'
import "./Skills.css"
import Header from "./Header"
import Card from "./Card"

const Skills = () => {
  return (
    <Container className='skills-main text-center my-4 p-4' id='skills-main'>
      <Header/>
      <Card/>
    </Container>
  )
}

export default Skills