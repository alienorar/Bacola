"use client";

import React from "react";
import {
    Carousel,
    CarouselContent,
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
        <div className="w-full max-w-[1200px] mx-auto">
            <Carousel className="relative">
                {banners?.results?.map((item) => (
                    <CarouselItem key={item.id}>
                        <Image
                            src={item.image}
                            alt="Description of the image"
                            layout="responsive"
                            width={1200} 
                            height={600} 
                            priority
                            className="rounded-lg"
                        />
                    </CarouselItem>
                ))}
                <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white  rounded-full shadow-lg" />
                <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white  rounded-full shadow-lg" />
            </Carousel>
        </div>
    );
};

export default Banner;
