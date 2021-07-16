import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'

const ModalExample = props => {
  // const { buttonLabel, className } = props

  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        How are we keeping you safe?
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody>
          <ol>
            <li>
              There is only one treatment room, so only 2 people are allowed
              inside of the office at a time - a therapist and a client.
            </li>
            <li>
              All clients have to come to their appointment unaccompanied as
              there is no waiting room.
            </li>
            <li>
              We are now scheduling appointments to promote social distancing by
              allowing additional time between clients so there is enough time
              to properly sanitize the treatment room.
            </li>
            <li>
              UV light is used to properly sanitize common areas between
              clients, and there is an air filter with UV light that is used
              before, during, and after your appointment.
            </li>
            <li>Everyone in the office is required to wear a mask.</li>
          </ol>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Got it
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default ModalExample
