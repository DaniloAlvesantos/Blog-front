"use client"

import { useState, Suspense } from "react"

import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RxMagnifyingGlass } from "react-icons/rx";
import { Unsplash } from "./unsplash" 
import { BodyFuncProps } from "./types"

export function Search(props: BodyFuncProps) {
    const [inputValue, setInputValue] = useState<string>("")

    return (
        <Popover>
            <PopoverTrigger>
                <RxMagnifyingGlass className="text-white w-12 h-12 p-2 transition-colors duration-300 hover:bg-zinc-800 rounded" />
            </PopoverTrigger>
            <PopoverContent className="w-auto h-auto md:w-[28rem] mx-4">
                <Label 
                className="my-2"
                htmlFor="searchbar">Search Image</Label>
                <Input 
                id="searchbar"
                placeholder="Type"  
                autoComplete="off"
                onChange={e => setInputValue(e.target.value)} 
                />
                <footer className="py-4 overflow-y-scroll scrollbar-none h-[15rem]">
                    <Suspense fallback="Loading...">
                        <Unsplash 
                        inputVal={inputValue} 
                        handleBodyState={props.handleBodyState}
                        />
                    </Suspense>
                </footer>
            </PopoverContent>
        </Popover>
    )
}