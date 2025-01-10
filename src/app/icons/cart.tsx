import React from "react";

type CartWithBadgeProps = {
    count?: number; // Number of items in the cart (optional, defaults to 0)
    color?: string; // Icon color
    size?: number; // Icon size
};

const CartWithBadge: React.FC<CartWithBadgeProps> = ({
    count = 0, // Default value of count is 0
    color = "red",
    size = 22,
}) => (
    <div className="relative inline-flex items-center">
        {/* Cart Icon */}
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={color}
            viewBox="0 0 24 24"
            width={size}
            height={size}
        >
            <path d="M20.9,6H17V5c0-2.8-2.2-5-5-5S7,2.2,7,5v5h2V8h4V6H9V5c0-1.7,1.3-3,3-3c1.7,0,3,1.3,3,3v5h2V8h2.1l0.9,14H4.1  L4.9,8H5V6H3.1L1.9,24h20.1L20.9,6z" />
        </svg>

        {/* Badge */}
        {count >= 0 && (
            <span className="absolute -right-3 -top-3 bg-red-500 text-white text-xs  rounded-full px-2 py-1">
                {count}
            </span>
        )}
    </div>
);

export default CartWithBadge;
