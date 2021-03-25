import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

import { Colors } from '../common/enums/colors';
import { Flex } from '../common/components/Flex';

export interface IProps {
  title: string;
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: '50%',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#app');

export const EmployeeItemListItemSubject: React.FC<IProps> = ({ title, children }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <ItemStyled>
      <TitleStyled>{title}</TitleStyled>
      <ShowButton onClick={openModal}>Показать</ShowButton>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
        <TextStyled>{children}</TextStyled>
      </Modal>
    </ItemStyled>
  );
};

const TitleStyled = styled.div``;

const ItemStyled = styled(Flex)`
  border-bottom: 1px solid ${Colors.GRAY_34};
  justify-content: space-between;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  font-size: 1.2rem;
  color: ${Colors.GRAY_145};
  :last-child {
    border-bottom: none;
  }
`;

const TextStyled = styled.div`
  color: black;
  line-height: 1.4;
`;

const ShowButton = styled.button`
  color: white;
  text-decoration: none;
  user-select: none;
  padding: 0.5em 2em;
  outline: none;
  border: 2px solid;
  border-radius: 1px;
  transition: 0.2s;
  background: rgba(255, 255, 255, 0.2);
  :active {
    background: ${Colors.GREEN};
  }
`;
