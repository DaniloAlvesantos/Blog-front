import Image from "next/legacy/image";
import { ReactNode, ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  children?: ReactNode;
  url: string;
  alt: string;
  text: string;
}

export function FloatingButton(props: ButtonProps) {
  return (
    <button
      className="flex items-center gap-2 p-1 rounded min-w-[200px]"
      {...props}
    >
      <Image
        width={48}
        height={48}
        className="rounded bg-white"
        src={props.url}
        alt={props.alt}
      />
      <span>{props.text}</span>
    </button>
  );
}
