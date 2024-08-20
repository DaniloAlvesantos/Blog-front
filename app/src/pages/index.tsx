import Link from "next/link"
import { Editor } from "./editor"

export function Home() {
    return (
        <>
            <Link href={"/editor"}>
                <Editor />
            </Link>
        </>
    )
}