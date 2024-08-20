import { ReactNode, ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  children?: ReactNode;
}

export function BubbleButton(props: ButtonProps) {
  return (
    <button 
    className="p-2 text-white text-sm flex items-center gap-1.5 font-medium leading-none data-[active=true]:text-violet-500"
    {...props}
    />
  );
}
