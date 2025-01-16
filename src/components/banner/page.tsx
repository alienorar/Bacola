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
        <Carousel>
           
                {banners?.results?.map((item) => (
                     <CarouselContent key={item.id}>
                    <CarouselItem >
                        <Image
                            src={item.image}
                            alt="Description of the image"
                            width={1200}
                            height={73}
                            priority
                        />
                    </CarouselItem>
                    <CarouselItem >
                        <Image
                            src={item.image}
                            alt="Description of the image"
                            width={1200}
                            height={73}
                            priority
                        />
                    </CarouselItem>
                    <CarouselItem >
                        <Image
                            src={item.image}
                            alt="Description of the image"
                            width={1200}
                            height={73}
                            priority
                        />
                    </CarouselItem>
                    </CarouselContent>

                ))}
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
};

export default Banner;
