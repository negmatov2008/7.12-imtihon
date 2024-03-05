import React, { useState } from "react";
import Header from "./Header";
import { CloseModal, imgClose } from "../utils/Modal";
import SwitchImage from "./SwitchImage";
import Content from "./Content";
import LeftDesktopImage from "./LeftDesktopImage";
import { css, styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addImageProduct, addProduct } from "../Redux/cart";

const Select = styled.img`
  width: 88px;
  height: 88px;
  border-radius: 10px;
  cursor: pointer;
  ${(props) =>
    props.sselect
      ? css`
          border-radius: 10px;
          border: 2px solid #ff7e1b;
          background: linear-gradient(
            0deg,
            rgba(255, 255, 255, 0.75) 0%,
            rgba(255, 255, 255, 0.75) 100%
          );
          opacity: 0.3;
        `
      : ""}
`;

function Root() {
  const dispatch = useDispatch();
  const img = useSelector((state) => state.cart.how);

  const images = [
    {
      id: 1,
      selected: false,
    },
    {
      id: 2,
      selected: false,
    },
    {
      id: 3,
      selected: false,
    },
    {
      id: 4,
      selected: false,
    },
  ];

  const perveusly = () => {
    if (img == 1) {
      dispatch(addImageProduct(4));
    }
    if (img == 2) {
      dispatch(addImageProduct(1));
    }
    if (img == 3) {
      dispatch(addImageProduct(2));
    }
    if (img == 4) {
      dispatch(addImageProduct(3));
    }
  };

  const next = () => {
    if (img == 1) {
      dispatch(addImageProduct(2));
    }
    if (img == 2) {
      dispatch(addImageProduct(3));
    }
    if (img == 3) {
      dispatch(addImageProduct(4));
    }
    if (img == 4) {
      dispatch(addImageProduct(1));
    }
  };
  return (
    <>
      <Header />
      <main className="flex md:mt-[230px] mt-[77px]  flex-col gap-[24px] md:flex-row md:max-w-[1110px] md:items-center mx-auto md:gap-[50px] md:pb-[132px]">
        <LeftDesktopImage />
        <SwitchImage />
        <Content />
      </main>
      <dialog id="modal" className="h-full">
        <div
          id="cont"
          className="w-[250px] pb-[70px] h-full pt-[24px] pl-[25px] bg-white"
        >
          <button
            className="mb-[53px]"
            onClick={() => CloseModal()}
            type="button"
          >
            <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fill="#69707D"
                fill-rule="evenodd"
              />
            </svg>
          </button>
          <ul className="text-[18px] font-bold flex flex-col gap-[20px]">
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </dialog>
      <dialog
        id="img"
        className="w-[500px]     text-white relative  rounded-[10px]  bg-transparent"
      >
        <div className="flex flex-col gap-[10px]">
          <button onClick={() => imgClose()} className="flex justify-end ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20 2.85714L17.1429 0L10 7.14286L2.85714 0L0 2.85714L7.14286 10L0 17.1429L2.85714 20L10 12.8571L17.1429 20L20 17.1429L12.8571 10L20 2.85714Z"
                fill="white"
              />
            </svg>
          </button>
          <div className="w-full flex flex-col relative gap-[35px] items-center ">
            <div className="absolute top-[210px]   w-full flex justify-between items-center">
              <button
                onClick={perveusly}
                className="w-[60px] h-[56px] hover:opacity-[0.7] rounded-[999px] bg-white flex justify-center items-center"
              >
                <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11 1 3 9l8 8"
                    stroke="#1D2026"
                    stroke-width="3"
                    fill="none"
                    fill-rule="evenodd"
                  />
                </svg>
              </button>
              <button
                onClick={next}
                className="w-[60px] h-[56px] hover:opacity-[0.7] rounded-[999px] bg-white flex justify-center items-center"
              >
                <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="m2 1 8 8-8 8"
                    stroke="#1D2026"
                    stroke-width="3"
                    fill="none"
                    fill-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <img
              className="rounded-[10px]"
              src={`image-product-${img}.jpg`}
              alt=""
            />

            <div className="flex   gap-[31px]">
              {images.map((i) => (
                <Select
                  key={i.id}
                  onClick={() => dispatch(addImageProduct(i.id))}
                  className="hover:opacity-[0.6]"
                  sselect={i.id === img}
                  src={`image-product-${i.id}-thumbnail.jpg`}
                />
              ))}
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default Root;
