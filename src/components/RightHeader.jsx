import { Badge } from "@mui/material";
import React, { useEffect, useState } from "react";
import Cart from "./Cart";
import { useSelector } from "react-redux";

function RightHeader() {
  const [cart, setCart] = useState(true);
  const bodyEl = document.getElementById("body");
  const prduct = useSelector((state) => state.cart.cartHow);

  useEffect(() => {
    bodyEl.addEventListener("click", () => {
      setCart(true);
    });

    return () => {
      bodyEl.removeEventListener("click", () => {
        setCart(true);
      });
    };
  }, []);

  const clickCart = (e) => {
    e.stopPropagation();
    setCart(!cart);
  };

  return (
    <>
      <div className="flex gap-[22px] items-center ">
        <button onClick={(e) => clickCart(e)}>
          <Badge badgeContent={prduct} color="warning">
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="#69707D"
                fill-rule="nonzero"
              />
            </svg>
          </Badge>
        </button>
        <div className="w-[24px] h-[24px] rounded-[999px] cursor-pointer  hover:border-[#FF7E1B] hover:border-[2px] md:w-[50px] md:h-[50px]">
          <img className="w-[24px] md:w-[50px]" src="image-avatar.png" alt="" />
        </div>
        <Cart hidden={cart} />
      </div>
    </>
  );
}

export default RightHeader;
