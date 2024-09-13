'use client'

import React from 'react'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from '@nextui-org/react'

export default function ImageGallery() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Modal Title</ModalHeader>
              <ModalBody>
                <p>Content goes here...</p>
              </ModalBody>
              <ModalFooter>
                <Button onClick={onClose}>Close</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
