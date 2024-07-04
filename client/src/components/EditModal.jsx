import React from 'react'
import DefinedModal from './DefinedModal'
import { useDisclosure, IconButton } from '@chakra-ui/react'
import { CiEdit } from "react-icons/ci";

function EditModal({friend}) {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
      <>
        <IconButton
          variant="ghost"
          size={"sm"}
          onClick={onOpen}
          aria-label="See menu"
          icon={<CiEdit size={20} />}
        />

        <DefinedModal isOpen={isOpen} onClose={onClose} friend={friend} />
      </>
    );
}

export default EditModal
