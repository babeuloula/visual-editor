import { useState } from 'react'

import { BubbleMenu, Editor, EditorContent, useEditor } from '@tiptap/react'
import { Node } from '@tiptap/core'
import Text from '@tiptap/extension-text'
import Bold from '@tiptap/extension-bold'
import Italic from '@tiptap/extension-italic'
import Link from '@tiptap/extension-link'
import Underline from '@tiptap/extension-underline'
import Highlight from '@tiptap/extension-highlight'
import { TiptapToolbar } from 'src/components/Editor/TiptapEditor/TiptapToolbar'
import Paragraph from '@tiptap/extension-paragraph'
import OrderedList from '@tiptap/extension-ordered-list'
import BulletList from '@tiptap/extension-bullet-list'
import ListItem from '@tiptap/extension-list-item'
import Document from '@tiptap/extension-document'
import Heading from '@tiptap/extension-heading'
import TextAlign from '@tiptap/extension-text-align'

const SingleDocument = Node.create({
  name: 'doc',
  topNode: true,
  group: 'block',
  content: 'inline*',
})

type TiptapEditorProps = {
  value: string
  onChange: (v: string) => void
  colors?: string[]
  backgroundColor?: string
  color?: string
  multiline?: boolean
}

export function TiptapEditor({
  value,
  onChange,
  multiline = false,
}: TiptapEditorProps) {
  const editor = useEditor({
    extensions: [
      ...(multiline ? [Document] : [SingleDocument]),
      Paragraph,
      OrderedList,
      BulletList,
      ListItem,
      Text,
      Bold,
      Italic,
      Highlight,
      Underline,
      Link.configure({ openOnClick: false }),
      Heading.configure({ levels: [2, 3, 4] }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
        defaultAlignment: 'right',
      }),
    ],
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
    content: value,
  })

  if (editor && editor.getHTML() !== value) {
    // editor.commands.setContent(value)
  }

  return (
    <div>
      <EditorContent editor={editor} />
      {editor && <TiptapToolbar editor={editor} />}
    </div>
  )
}
