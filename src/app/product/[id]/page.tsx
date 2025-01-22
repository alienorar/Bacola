"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductDetailProps {
  params: { id: string };
}

interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  description: string;
}

const ProductDetail = ({ params }: ProductDetailProps) => {
  const router = useRouter();
  const productId = params.id;

  // Mock product details for demo
  const [product, setProduct] = useState<Product>({
    id: productId,
    title: "Organic Apple",
    price: 10.99,
    image: "/apple.jpg",
    description: "Fresh organic apple directly from the farm.",
  });

  const [quantity, setQuantity] = useState(0);

  // Sync quantity with localStorage
  useEffect(() => {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      const cart = JSON.parse(cartData);
      const item = cart.items.find((item: any) => item.id === productId);
      setQuantity(item ? item.quantity : 0);
    }
  }, [productId]);

  const updateLocalStorage = (newQuantity: number) => {
    const cartData = localStorage.getItem("cart");
    let cart = { items: [] };

    if (cartData) {
      cart = JSON.parse(cartData);
    }

    const existingItemIndex = cart.items.findIndex((item: any) => item.id === productId);

    if (existingItemIndex >= 0) {
      if (newQuantity > 0) {
        cart.items[existingItemIndex].quantity = newQuantity;
      } else {
        cart.items.splice(existingItemIndex, 1);
      }
    } else {
      if (newQuantity > 0) {
        cart.items.push({ id: productId, title: product.title, price: product.price, image: product.image, quantity: newQuantity });
      }
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const handleAddToCart = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateLocalStorage(newQuantity);
  };

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateLocalStorage(newQuantity);
  };

  const handleDecrement = () => {
    const newQuantity = quantity > 0 ? quantity - 1 : 0;
    setQuantity(newQuantity);
    updateLocalStorage(newQuantity);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <button
        onClick={() => router.back()}
        className="text-blue-500 mb-4 hover:underline"
      >
        Go Back
      </button>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="relative w-full md:w-1/2">
          <Image
            src={product.image}
            alt={product.title}
            width={500}
            height={500}
            className="object-contain rounded-lg"
          />
          <div className="absolute top-2 left-0 bg-[#00B853]/10 text-[#00B853] text-xs font-medium px-2 py-1 rounded">
            ORGANIC
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">{product.title}</h1>
          <p className="text-gray-600 text-lg mb-6">{product.description}</p>
          <p className="text-red-500 font-bold text-xl mb-4">${product.price}</p>
          <div className="mb-6">
            {!quantity ? (
              <Button
                onClick={handleAddToCart}
                variant="outline"
                className="w-full text-[#2bbef9] hover:text-white rounded-2xl font-bold hover:bg-[#2bbef9]"
              >
                Add to cart
              </Button>
            ) : (
              <div className="flex items-center justify-between border rounded-lg">
                <button
                  onClick={handleDecrement}
                  className="w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-50 rounded-l-lg border-r"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-gray-700 font-medium text-lg px-4">
                  {quantity}
                </span>
                <button
                  onClick={handleIncrement}
                  className="w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-50 rounded-r-lg border-l bg-[#FDC040]"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
