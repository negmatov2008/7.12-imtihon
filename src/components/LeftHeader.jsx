import React from "react";
import { styled } from "styled-components";
import { desktop } from "../utils/Responsive";

const LeftStyle = styled.div`
  display: none;

  ${desktop} {
    display: flex;
    gap: 56px;
    align-items: center;
  }
`;

const LiStyle = styled.li`
  &:hover::after {
    content: "";
    width: 100%;
    height: 4px;
    background: #ff7e1b;
    position: absolute;
    top: 64px;
    left: 0;

  }
`;
function LeftHeader() {
  return (
    <>
      <LeftStyle>
        <img src="logo.svg" alt="" />
        <ul className="flex gap-[32px] items-center">
          <LiStyle className="text-[#69707D] cursor-pointer relative text-[15px] leading-[26px] hover:text-[#1D2026]">
            Collections
          </LiStyle>
          <LiStyle className="text-[#69707D] cursor-pointer relative text-[15px] leading-[26px] hover:text-[#1D2026]">
          Men
          </LiStyle>
          <LiStyle className="text-[#69707D] cursor-pointer relative text-[15px] leading-[26px] hover:text-[#1D2026]">
          Women
          </LiStyle>
          <LiStyle className="text-[#69707D] cursor-pointer relative text-[15px] leading-[26px] hover:text-[#1D2026]">
            About
          </LiStyle>
          <LiStyle className="text-[#69707D] cursor-pointer relative text-[15px] leading-[26px] hover:text-[#1D2026]">
            Contact
          </LiStyle>
        </ul>
      </LeftStyle>
    </>
  );
}

export default LeftHeader;
