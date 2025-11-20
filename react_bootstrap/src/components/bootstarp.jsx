import React from 'react'
import {Button, Accordion} from "react-bootstrap"

export const ExampleBootstrap = () => {
  return (
    <div className='mx-2 my-5'> 
        {/* <button className='btn btn-primary btn-outline-danger'>click me</button>
        <button className='btn btn-danger'>click me</button>
        <button className='btn btn-secondary btn-outline-success'>click me</button>
        <button className='btn btn-warning'>click me</button> */}
        <Button variant='danger' className='btn btn-outline-info p-4'> hello hi?</Button>
    <Accordion defaultActiveKey="1">
          <Accordion.Item eventKey='1'>
            <Accordion.Header>
              What is react?
            </Accordion.Header>
            <Accordion.Body>
              <h4>React is library for js</h4>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item>
            <Accordion.Header>
              What is Bootstrap?
            </Accordion.Header>
            <Accordion.Body>
             <div>
              <h3>Its css frontend ui framework</h3>
              <p>it common css library</p>
              </div> 
            </Accordion.Body>
          </Accordion.Item>
    </Accordion>

    </div>
  )
}
