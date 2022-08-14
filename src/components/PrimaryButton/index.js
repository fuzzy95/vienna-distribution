import React from 'react';

const PrimaryButton = ({ label, onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className='text-[15px] bg-secondary hover:bg-secondaryHover px-[30px] py-[15px] rounded-[27px] md:h-[50px] h-[43px] flex justify-center items-center transition duration-150 ease-in-out uppercase'
      >
        {label}
      </button>
    </>
  );
};

export default PrimaryButton;
