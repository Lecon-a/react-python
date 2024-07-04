import { Button, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { BiAddToQueue } from "react-icons/bi";
import DefinedModal from './DefinedModal';

function CreateUserModal() {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
      <>
        <Button onClick={onOpen}>
          <BiAddToQueue size={20} />
        </Button>
        <DefinedModal isOpen={isOpen} onClose={onClose} />
      </>
    );
}

export default CreateUserModal