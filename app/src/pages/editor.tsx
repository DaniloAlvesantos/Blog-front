"use client";

import { EditorComp } from "../components/editor/richTextEditorMenu";
import { Search } from "../components/unsplash/search";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { handleSetLocalStorage, handleGetLocalStorage } from "../utils/localStorage";

export type BodyProps = {
  background?:string;
  htmlContent?: string;
}

export function Editor() {  
  const [body, setBody] = useState<BodyProps>({
    background:"",
    htmlContent:""  
  });

  const handleBodyState = (sub: string, value: any) => {
    setBody(prevState => ({
      ...prevState,
      [sub]: value
    }))
  }

  useEffect(() => console.log(body))

  return (
    <>
        <div
          className={`${
            !body.background && "bg-gradient-to-r from-zinc-800 to-zinc-700"
          } w-full min-h-[365px] relative`}
        >
          {body.background && (
            <Image
            src={body.background}
            alt="background"
            quality={100}
            className="absolute object-cover object-center"
            fill
            />
            )}
          <div className="absolute bottom-4 right-4">
            <Search handleBodyState={handleBodyState} />
          </div>
        </div>
      <section className="px-4 py-8 flex items-center justify-center w-full h-full">
        <EditorComp setBody={handleBodyState} />
      </section>
    </>
  );
}
