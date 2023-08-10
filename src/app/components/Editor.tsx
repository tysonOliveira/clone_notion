'use client'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { initialContent } from './initialContent';

export interface EditorProps { }

export function Editor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: initialContent,
    editorProps: {
      attributes: {
        class: 'outline-none',
      }
    }
  })

  return (
    <EditorContent className="max-w-[700px] mx-auto pt-16 prose" editor={editor} />
  );
}