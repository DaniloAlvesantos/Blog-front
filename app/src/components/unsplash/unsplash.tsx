"use client";

import Image from "next/image";
import * as Props from "./types/index";
import { unsplash_api } from "@/app/src/api/unsplash";
import { useState, useEffect, useCallback } from "react";

export function Unsplash(props: Props.UnsplashProps) {
  const { inputVal, handleBodyState } = props;
  const [images, setImages] = useState([]);

  const getRandomImages = async () => {
    const response = await unsplash_api.get(`photos/?per_page=18`);
    const data = response.data;
    console.log(data);
    setImages(data);
  };

  const searchImage = useCallback(async () => {
    const response = await unsplash_api.get(
      `search/photos/?query=${inputVal}&per_page=18`
    );
    const data = response.data.results;
    console.log(data);
    setImages(data);
  }, [inputVal]);

  useEffect(() => {
    if (inputVal.length) {
      searchImage();
    } else {
      getRandomImages();
    }
  }, [inputVal.length, searchImage]);

  return (
    <div className="grid items-center justify-center place-items-center grid-cols-2 sm:grid-cols-3 gap-4">
      {images.length &&
        images.map((image: Props.ResponseProps) => (
          <div
            key={crypto.randomUUID()}
            className="w-32 h-24 relative cursor-pointer overflow-hidden"
            onClick={() => handleBodyState("background", image.urls.regular)}
          >
            <Image
              className="absolute rounded transition-all duration-300 ease-in-out hover:scale-150"
              fill
              priority
              loading="eager"
              objectFit="cover"
              src={image.urls.thumb}
              alt={image.alt || crypto.randomUUID()}
              sizes="(max-width:8rem),(max-height:6rem)"
            />
          </div>
        ))}
    </div>
  );
}
