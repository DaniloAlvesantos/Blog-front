import { Editor } from "@tiptap/core";
import { BubbleButton } from "../buttons";
import { BubbleMenu } from "@tiptap/react";
import {
  RxFontBold,
  RxFontItalic,
  RxStrikethrough,
  RxCode,
  RxLink1,
} from "react-icons/rx";
import { getLink } from "../utils/edtiorUtils";

interface BubbleProps {
  editor: Editor;
}

export function BubbleMenuComp(props: BubbleProps) {
  const { editor } = props;
  const bubbleSchema = {
    bold: {
      id: crypto.randomUUID(),
      onClick: () => editor.chain().focus().toggleBold().run(),
      isActive: editor.isActive("bold"),
      icon: <RxFontBold className="w-4 h-4" />,
    },
    italic: {
      id: crypto.randomUUID(),
      onClick: () => editor.chain().focus().toggleItalic().run(),
      isActive: editor.isActive("italic"),
      icon: <RxFontItalic className="w-4 h-4" />,
    },
    strike: {
      id: crypto.randomUUID(),
      onClick: () => editor.chain().focus().toggleStrike().run(),
      isActive: editor.isActive("strike"),
      icon: <RxStrikethrough className="w-4 h-4" />,
    },
    codeBlock: {
      id: crypto.randomUUID(),
      onClick: () => editor.chain().focus().toggleCodeBlock().run(),
      isActive: editor.isActive("code"),
      icon: <RxCode className="w-4 h-4" />,
    },
    setLink: {
      id: crypto.randomUUID(),
      onClick: () => getLink({ editor }),
      isActive: editor.isActive("link"),
      icon: <RxLink1 className="w-4 h-4" />,
    },
  };

  return (
    <BubbleMenu
      className="bg-zinc-800 rounded-lg overflow-hidden divide-x divide-white flex"
      editor={editor}
    >
      {Object.entries(bubbleSchema).map(([key, button]) => (
        <BubbleButton
          key={key}
          onClick={button.onClick}
          data-active={button.isActive}
        >
          {button.icon}
        </BubbleButton>
      ))}
    </BubbleMenu>
  );
}
