import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { addProduct } from "../Redux/cart";
import { desktop } from "../utils/Responsive";

const CartStyle = styled.div`
  display: ${(props) => (props.hidden ? "none" : "")};
  position: absolute;
  width: 360px;
  height: 256px;
  z-index: 20;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 20px 50px -20px rgba(29, 32, 38, 0.5);
  top: 76px;
  left: 7px;

  ${desktop} {
    top: 105px;
    left: 68%;
  }
`;

const Button = styled.button`
  box-shadow: 0px 20px 50px -20px #ff7e1b;
`;
function Cart({ hidden }) {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.cart.how);
  const price = useSelector((state) => state.cart.price);
  const delate = (e) => {
    e.stopPropagation();
    dispatch(addProduct(1));
  };
  return (
    <>
      <CartStyle hidden={hidden}>
        <div className="font-bold pt-[24px] pl-[24px]  mb-[27px]">Cart</div>
        <div className="w-full  h-[1px] bg-[#E4E9F2]"></div>
        {product > 0 ? (
          <div className="w-full pt-[24px] px-[24px] flex flex-col gap-[24px]">
            <div className="flex items-center justify-between">
              <img
                className="w-[50px] rounded-[4px]"
                src="image-product-1-thumbnail.jpg"
                alt=""
              />
              <div className="flex flex-col ">
                <span className="text-[#69707D]">
                  Fall Limited Edition Sneakers
                </span>
                <div className="text-[#69707D] ">
                  {" "}
                  $125.00 x {product}{" "}
                  <span className="font-bold text-[#1D2026]">{`$${price}.00`}</span>
                </div>
              </div>
              <button onClick={(e) => delate(e)}>
                <img src="icon-delete.svg" alt="" />
              </button>
            </div>
            <Button className="flex items-center hover:bg-[#FFAB6A] justify-center gap-[15px] h-[56px] font-bold rounded-[10px] bg-[#FF7E1B] text-white">
              Checkout
            </Button>
          </div>
        ) : (
          <div className="text-center pt-[20%] text-[#69707D] font-bold">
            Your cart is empty.
          </div>
        )}
      </CartStyle>
    </>
  );
}

export default Cart;
