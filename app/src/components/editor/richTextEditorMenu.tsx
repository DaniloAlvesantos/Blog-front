"use client";

import { Suspense } from "react";
import { useEditor, EditorContent } from "@tiptap/react";

import StarterKit from "@tiptap/starter-kit";
import { Link } from "@tiptap/extension-link";
import { Image } from "@tiptap/extension-image";
import { Document } from "@tiptap/extension-document";
import { Paragraph } from "@tiptap/extension-paragraph";
import { Placeholder } from "@tiptap/extension-placeholder";

import { FloatingMenuComp, BubbleMenuComp } from "./menus";
import { proseStyling } from "./utils/edtiorUtils";

import "./placeholder.css";
import { handleGetLocalStorage } from "../../utils/localStorage";

type EditorCompProps = {
  body?: string;
  setBody: (key: string, value: string) => void;
};

export function EditorComp({ setBody, body }: EditorCompProps) {
  const tiptap = useEditor({
    extensions: [
      StarterKit.configure({
        document: false,
      }),
      Document.extend({
        content: "heading block*",
      }),
      Placeholder.configure({
        placeholder: ({ node }) => {
          if (node.type.name === "heading") {
            return "Untitled";
          }

          if (node.type.name === "editorBlock") {
            return "";
          }

          return "Type '/' to see commands...";
        },
      }),
      Paragraph.configure({
        HTMLAttributes: {
          class: "min-h-4",
        },
      }),
      Link.configure({
        validate: (href) => /^https?:\/\//.test(href),
      }),
      Link.extend({
        inclusive: false,
      }),
      Image.configure({
        inline: true,
        allowBase64: true,
        HTMLAttributes: {
          class: "rounded object-cover",
        },
      }),
    ],
    editorProps: {
      attributes: {
        class: "outline-none",
      },
    },
    onUpdate(editor) {
      const schema = editor.editor.getHTML();
      // setBody("htmlContent", schema);
      console.log(schema)
    },
    onBeforeCreate() {
      const draftSchema = handleGetLocalStorage("draft");
      // setBody("background", draftSchema.background)
      console.log(draftSchema.htmlContent);
      // tiptap?.commands.insertContent(draftSchema)
    },
    content: ``,
  });

  return (
    <>
      <EditorContent
        editor={tiptap}
        className={`prose prose-sm sm:prose-base xl:prose-lg 2xl:prose-xl prose-invert text-white ${proseStyling}`}
      />
      {tiptap && (
        <Suspense fallback={<h1>loading...</h1>}>
          <FloatingMenuComp editor={tiptap} />
          <BubbleMenuComp editor={tiptap} />
        </Suspense>
      )}
    </>
  );
}
