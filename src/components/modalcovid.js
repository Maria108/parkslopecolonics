import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'

const ModalExample = props => {
  const { buttonLabel, className } = props

  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        How we are keeping you safe?
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody>
          <ol>
            <li>
              There is only one treatment room, so there is only 2 people inside
              of the office at the time - a therapist and a client.
            </li>
            <li>
              We are now scheduling appointments to promote social distancing
              allowing additional time between clients to ensure we have enough
              time to properly sanitize the treatment room.
            </li>
            <li>
              UV light is used to properly sanitize common areas between clients
              and there is an Air filter with UV light that is turned on before,
              during and after your appointment.
            </li>
            <li>
              All clients have to come to their appointment unaccompanied.
            </li>
            <li>
              The Therapist is wearing a mask and gloves and clients are
              required to wear a mask or face covering inside of the office.
            </li>
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
