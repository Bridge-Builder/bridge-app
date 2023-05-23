import { FC, useRef, KeyboardEvent, useState } from 'react';
import { EditableBlockProps } from '@/modules/textEditor/component/editableBlock/EditableBlock.types';
import { StyledContentEditable } from '@/modules/textEditor/component/editableBlock/EditableBlock.styles';
import { ContentEditableEvent } from 'react-contenteditable';

export const EditableBlock: FC<EditableBlockProps> = props => {
  const { id, position, html, tag, flag, updateBlock, addBlock, removeBlock, upDownBlock } = props;
  const contentEditableRef = useRef(null);
  const [content, setContent] = useState('');

  const onChangeHandler = (e: ContentEditableEvent) => {
    updateBlock(id, e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const keyDown = e.key;
    // @ts-ignore
    const elmContent = e.target.innerHTML;
    if (keyDown === 'Enter') {
      e.preventDefault();
      // 한글의 경우 자판 입력시 Composing 이 일어나기 때문에 아래와 같이 처리
      // see: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/isComposing
      if (e.nativeEvent.isComposing) return;
      addBlock(id);
    } else if (keyDown === 'Backspace' && elmContent === '') {
      e.preventDefault();
      removeBlock(id);
    } else if (keyDown === 'ArrowUp' || keyDown === 'ArrowDown') {
      e.preventDefault();
      upDownBlock(id, keyDown);
    }
  };

  return (
    <StyledContentEditable
      innerRef={contentEditableRef}
      html={html}
      data-position={position}
      tagName={tag}
      disabled={false}
      onChange={e => onChangeHandler(e)}
      onKeyDown={e => handleKeyDown(e)}
    />
  );
};
