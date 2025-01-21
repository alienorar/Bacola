"use client";

import React from "react";
import {
    Carousel,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

interface BannerProps {
    banners: { id: number; image: string }[];
}

const Banner: React.FC<BannerProps> = ({ banners }) => {
    return (
      <div className="w-full  flex justify-end">
            <div className="w-[900px]  h-[400px] flex justify-center">
                <Carousel className="relative w-full h-full">
                    {banners?.results?.map((item) => (
                        <CarouselItem key={item.id} className="relative w-full h-full">
                            <div className="relative w-full h-full">
                                <Image
                                    src={item.image}
                                    alt={`Banner ${item.id}`}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg"
                                />
                            </div>
                        </CarouselItem>
                    ))}
                    <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-lg" />
                    <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-lg" />
                </Carousel>
            </div>
      </div>
    );
};

export default Banner;
