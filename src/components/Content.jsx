import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { addProduct } from "../Redux/cart";

const Button = styled.button`
  box-shadow: 0px 20px 50px -20px #ff7e1b;
`;

function Content() {
  const dsipatch = useDispatch();
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 6) {
      const newcont = count + 1;
      setCount(newcont);
    }
  };
  const decrement = () => {
    if (count > 0) {
      const newcont = count - 1;
      setCount(newcont);
    }
  };

  return (
    <>
      <div className="w-[327px] md:w-[445px] mx-auto ">
        <div className="flex flex-col  gap-[26px] md:gap-[38px]">
          <div>
            <h6 className="text-[#FF7E1B] text-[12px] md:text-[13px] mb-[19px] font-bold uppercase">
              Sneaker Company
            </h6>
            <h1 className="text-[28px] md:text-[44px] leading-[32px] md:leading-[48px] mb-[15px] font-bold">
              Fall Limited Edition Sneakers
            </h1>
            <p className="text-[#69707D] text-[15px] leading-[25px]">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>
          </div>
          <div className="flex w-full md:flex-col  justify-between md:justify-none items-center md:items-start">
            <div className="flex gap-[24px] items-center">
              <span className="text-[28px] font-bold">$125.00</span>
              <span className="w-[51px] h-[27px] flex justify-center items-center rounded-[6px] bg-[rgba(255,_126,_27,_0.24)] text-[#FF7E1B] font-bold">
                50%
              </span>
            </div>
            <span className="text-[#B6BCC8] font-bold leading-[26px] line-through">
              $250.00
            </span>
          </div>
          <div className="flex flex-col md:flex-row gap-[16px] md:gap-[32px]">
            <div className="flex w-full  px-[24px] h-[56px] bg-[#F6F8FD] md:max-w-[157px] rounded-[10px] justify-between items-center">
              <button onClick={decrement}>
                <img src="icon-minus.svg" alt="" />
              </button>
              <span className="font-bold">{count}</span>
              <button onClick={increment}>
                <img src="icon-plus.svg" alt="" />
              </button>
            </div>
            <Button
              onClick={() => {
                dsipatch(addProduct(count));
              }}
              className="flex flex-1 mb-[6vh] items-center py-[19px] hover:bg-[#FFAB6A] justify-center gap-[15px] h-[56px] font-bold rounded-[10px] bg-[#FF7E1B] text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.0905 2.91311H16.7397C17.2062 2.91311 17.5482 3.35211 17.4353 3.80391L15.9785 9.63048C15.9025 9.93446 15.6378 10.1539 15.3251 10.1723L3.86762 10.8456C4.07245 11.3243 4.54702 11.6529 5.09162 11.6529H13.0982C14.2967 11.6529 15.2717 12.628 15.2717 13.8264C15.2717 15.0249 14.2967 16 13.0982 16C11.5964 16 10.5406 14.502 11.0544 13.0868H7.13056C7.645 14.5038 6.58692 16 5.08677 16C3.27933 16 2.26409 13.9081 3.37522 12.4891C2.75894 12.0009 2.40119 11.2825 2.34268 10.6204C1.43419 0.498541 1.47444 0.946953 1.55953 1.89506L1.56008 1.9012C1.61714 2.53699 1.6934 3.38676 1.51811 1.43385H0.716927C0.320978 1.43385 0 1.11288 0 0.716927C0 0.320978 0.320978 0 0.716927 0H2.17355C2.54465 0 2.85443 0.28322 2.88761 0.652847L3.0905 2.91311ZM4.3471 13.8264C4.3471 14.2343 4.67894 14.5661 5.08677 14.5661C5.49463 14.5661 5.82647 14.2343 5.82647 13.8264C5.82647 13.4186 5.49463 13.0868 5.08677 13.0868C4.67894 13.0868 4.3471 13.4186 4.3471 13.8264ZM13.0982 14.5661C12.6903 14.5661 12.3585 14.2343 12.3585 13.8264C12.3585 13.4186 12.6903 13.0868 13.0982 13.0868C13.506 13.0868 13.8379 13.4186 13.8379 13.8264C13.8379 14.2343 13.506 14.5661 13.0982 14.5661ZM3.67463 9.42062L14.7152 8.77181L15.8215 4.34693H3.21921L3.67463 9.42062Z"
                  fill="white"
                />
              </svg>
              <span>Add to cart</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;