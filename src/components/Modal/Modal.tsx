import React from 'react';

export const Modal: React.FC<any> = ({
  showModal,
  editShowModal,
  children,
  classname,
}) => {
  if (!showModal) return null;

  return (
    <>
      {showModal && (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
        <div
          style={{
            position: 'fixed',
            top: '0px',
            left: '0px',
            width: '100%',
            height: '100%',
            background: 'black',
            opacity: 0.35,
            zIndex: 20,
          }}
          onClick={() => editShowModal(false)}
        />
      )}
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          width: 0,
          height: 0,
          display: 'flex',
          flexFlow: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 21,
        }}
      >
        {children}
      </div>
    </>
  );
};
