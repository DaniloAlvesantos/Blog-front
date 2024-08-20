import { Editor } from "@tiptap/core";
import { FloatingMenu } from "@tiptap/react";
import { FloatingButton } from "../buttons";
import { getImage } from "../utils/edtiorUtils";

interface FloatingProps {
  editor: Editor;
}

export function FloatingMenuComp(props: FloatingProps) {
  const { editor } = props;
  const buttons = {
      h1: {
        title: "Heading 1",
        img: {
          url: "https://www.notion.so/images/blocks/header.57a7576a.png",
          alt: "h1",
        },
        onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      },
      h2: {
        title: "Heading 2",
        img: {
          url: "https://www.notion.so/images/blocks/subheader.9aab4769.png",
          alt: "h2",
        },
        onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      },
      h3: {
        title: "Heading 3",
        img: {
          url: "https://www.notion.so/images/blocks/subsubheader.d0ed0bb3.png",
          alt: "h3",
        },
        onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      },
      quote: {
        title: "Quote",
        img: {
          url: "https://www.notion.so/images/blocks/quote/en-US.png",
          alt: "quote",
        },
        onClick: () => editor.chain().focus().toggleBlockquote().run(),
      },
      bulletList: {
        title: "Bullet List",
        img: {
          url: "https://www.notion.so/images/blocks/bulleted-list.0e87e917.png",
          alt: "bulletList",
        },
        onClick: () => editor.chain().focus().toggleBulletList().run(),
      },
      numberedList: {
        title: "Numbered List",
        img: {
          url: "https://www.notion.so/images/blocks/numbered-list.0406affe.png",
          alt: "numberedList",
        },
        onClick: () => editor.chain().focus().toggleOrderedList().run(),
      },
      divider: {
        title: "Divider",
        img: {
          url: "https://www.notion.so/images/blocks/divider.210d0faf.png",
          alt: "hr",
        },
        onClick: () => editor.chain().focus().setHorizontalRule().run(),
      },
      image: {
        title: "Image",
        img: {
          url:"https://icons8.com.br/icon/ag7HLzS37tYF/imagem",
          alt:"img"
        },
        onClick:() => getImage({ editor })
      }
    };
    
  return (
    <FloatingMenu
      editor={editor}
      className="bg-zinc-800 rounded-lg flex-col py-2 px-1 text-white max-h-56 overflow-y overflow-x-hidden scrollbar-none"
      shouldShow={({ state }) => {
        const { $from } = state.selection;
        const currentLine = $from.nodeBefore?.textContent;

        return currentLine === "/";
      }}
    >
      {Object.entries(buttons).map(([key, button]) => (
        <FloatingButton
          key={key}
          url={button.img.url}
          alt={button.img.alt}
          text={button.title}
          onClick={button.onClick}
        />
      ))}
    </FloatingMenu>
  );
}
