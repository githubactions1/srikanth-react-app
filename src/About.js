import React from 'react'
import Footer from './Footer'
import about_img from './images/about.avif'
import { Modal, Button } from 'react-bootstrap'
import { useAuth } from './auth'

export default function About() {

  const [isShow, invokeModal] = React.useState(false)
  const initModal = () => {
    return invokeModal(!false)
  }

  const closeModal = () => {
    return invokeModal(false)
  }

  
  
  const {user}=useAuth();
    console.log(user);


  return (
    <div className=''>
      <div className='container'>
      <h3 className='text-center'>About Us</h3>

      <div className='row  about-div'>
        <div className='col-md-6 mt-3 mb-3'>
          <h3>Text Here</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
           
          </p>
        
          <Button variant="success" onClick={initModal}>
        Open Modal
      </Button>
      <Modal show={isShow}>
        <Modal.Header closeButton onClick={closeModal}>
          <Modal.Title>React Modal Popover Example</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={closeModal}>
            Close
          </Button>
          <Button variant="dark" onClick={initModal}>
            Store
          </Button>
        </Modal.Footer>
      </Modal>
        
        </div>
        <div className='col-md-6 mt-3 mb-3'>
        <img src={about_img} className="about-img" alt='' />
        </div>
      </div>
      </div>
    
      <Footer/>

      </div>
  )
}
