import React from "react";
import { Heart, Maximize2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "../ui/card";
import IceAdd from '../../images/ice-add.png'
import Bread from '../../images/bread.png'
interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
}

const Products = async () => {
    // Fetch all products from the backend
    const res = await fetch("http://localhost:8000/product/", {
        cache: "no-store", // Ensures fresh data is fetched every time
    });
    const data = await res.json();
    const results: Product[] = data?.results;

    if (!results || results.length === 0) {
        return <div>No products found.</div>;
    }

    return (
        <div className="flex flex-col justify-between items-end h-full">
            <div className="w-[884px] py-6 flex-grow">
                <h2 className="font-bold">Best Sellers</h2>
                <p className="text-gray-500 text-[14px]">
                    Do not miss the current offers until the end of March.
                </p>
            </div>

            {/* Carousel wrapping the product cards */}
            <div className="flex gap-[30px] ">
                <div>
                    {/* Use Next.js Image Component */}
                    <Image 
                        src={IceAdd} 
                        alt="Advertisement" 
                        width={274} 
                        height={379} 
                        className="rounded-lg mb-4"
                    />
                    <Image 
                        src={Bread} 
                        alt="Advertisement" 
                        width={274} 
                        height={379} 
                        className="rounded-lg mb-4"
                    />
                </div>
                <Carousel className="w-[884px] ">
                    <CarouselContent className="flex">
                        {results.map((item: Product) => (
                            <CarouselItem
                                key={item.id}
                                className="w-full md:basis-1/3 lg:basis-1/4"
                            >
                                <div>
                                    <Card className="group bg-white shadow-lg rounded-lg p-4 flex flex-col gap-1 hover:scale-105 transition-transform transform relative w-[224px]  max-w-[300px]">
                                        {/* Action buttons */}
                                        <div className="absolute top-2 right-2 z-50 flex flex-col gap-2 transform transition-all duration-300 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0">
                                            <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50">
                                                <Maximize2 className="w-4 h-4 text-gray-600" />
                                            </button>
                                            <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50">
                                                <Heart className="w-4 h-4 text-gray-600" />
                                            </button>
                                        </div>

                                        {/* Product Image */}
                                        <div className="relative mb-4">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-48 object-contain rounded-md transition-transform duration-300 group-hover:scale-105"
                                            />
                                            <div className="absolute top-2 left-0 bg-[#00B853]/10 text-[#00B853] text-xs font-medium px-2 py-1 rounded">
                                                ORGANIC
                                            </div>
                                        </div>

                                        {/* Product Information */}
                                        <p className="text-green-500 text-[12px]">IN STOCK</p>
                                        <Link href={`/product/${item.id}`}>
                                            <h3 className="text-gray-800 font-medium text-[15px] mb-2 hover:text-blue-600">
                                                {item.title}
                                            </h3>
                                        </Link>
                                        <div className="flex items-center mb-4 gap-2">
                                            <p className="line-through text-[15px] text-gray-500 font-medium">
                                                $20.00
                                            </p>
                                            <p className="text-red-500 font-bold text-xl mr-2">
                                                ${item.price}
                                            </p>
                                        </div>

                                        {/* Add to Cart Button */}
                                        <Button
                                            variant="outline"
                                            className="w-full text-[#2bbef9] hover:text-white rounded-2xl font-bold hover:bg-[#2bbef9]"
                                        >
                                            Add to cart
                                        </Button>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    );
};

export default Products;
