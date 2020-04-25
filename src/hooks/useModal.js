import React from 'react';

export default () => {
  const [modal, setModal] = React.useState(false);

  const handleModal = () => {
    setModal(!modal);
  };

  return { modal, handleModal };
};
