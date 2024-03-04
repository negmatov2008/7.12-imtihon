import React from "react";
import { styled } from "styled-components";
import { desktop } from "../utils/Responsive";
import { ShowModal } from "../utils/Modal";

const LeftstylePhone = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  ${desktop} {
    display: none;
  }
`;

function LeftHeaderPhone() {
  const menyu = () => {
    ShowModal();
  };

  return (
    <>
      <LeftstylePhone>
        <button
          onClick={() => {
            menyu();
          }}
        >
          <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
              fill="#69707D"
              fill-rule="evenodd"
            />
          </svg>
        </button>
        <img src="logo.svg" alt="" />
      </LeftstylePhone>
    </>
  );
}

export default LeftHeaderPhone;
