import { ContentEditableEvent } from 'react-contenteditable';
import * as React from 'react';

export interface EditableBlockProps {
  id: string;
  position: number;
  html: string;
  tag: string;
  flag: number;
  updateBlock: (currentBlockId: string, value: string) => void;
  addBlock: (currentBlockId: string) => void;
  removeBlock: (currentBlockId: string) => void;
  upDownBlock: (currentBlockId: string, direction: string) => void;
  // setBlock: Dispatch<SetStateAction<Block[]>>;
}

export interface ContentEditableProps {
  innerRef?: React.RefObject<HTMLElement> | Function;
  html: string;
  disabled?: boolean;
  tagName?: string;
  className?: string;
  style?: Object;
  onChange: (event: ContentEditableEvent) => void;
  onBlur?: React.FocusEventHandler<HTMLDivElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLDivElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
}
