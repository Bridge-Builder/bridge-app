import { FC, useEffect, useState } from 'react';
import { Block, TextEditorProps } from './TextEditor.types';
import { EditorContainer } from '@/modules/textEditor/TextEditor.styles';
import { EditableBlock } from '@/modules/textEditor/component/editableBlock/EditableBlock';
import { findIndex, insert, map, pipe } from 'ramda';
import usePrevious from '@/components/hooks/usePrevious';
import { objectId } from '@/utils/objectId';
import { setCaretToEnd } from '@/utils/text';

export const TextEditor: FC<TextEditorProps> = props => {
  const {} = props;

  const initialBlocks = [
    { id: objectId(), html: '제목을 입력하세요', tag: 'h1', flag: 1 },
    { id: objectId(), html: '내용을 입력하세요', tag: 'p', flag: 1 }
  ];
  const [blocks, setBlocks] = useState<Block[]>(initialBlocks);
  const [currentBlockId, setCurrentBlockId] = useState<string | null>(null);
  const prevBlocks = usePrevious(blocks);

  useEffect(() => {
    // 블럭이 추가 될 때 다음 블럭으로 포커싱
    if (prevBlocks && prevBlocks.length + 1 === blocks.length) {
      const nextBlockPosition = findIndex<Block>(block => block.id === currentBlockId)(blocks) + 2;
      const nextBlockElm: HTMLElement | null = document.querySelector(
        `[data-position="${nextBlockPosition}"]`
      );
      if (!nextBlockElm) return;
      nextBlockElm.focus();
    }
    // 블럭이 제거 될 때 이전 블럭으로 포커싱
    if (prevBlocks && prevBlocks.length - 1 === blocks.length) {
      const prevBlockPosition = findIndex<Block>(block => block.id === currentBlockId)(prevBlocks);
      const prevBlockElm: HTMLElement | null = document.querySelector(
        `[data-position="${prevBlockPosition}"]`
      );
      if (!prevBlockElm) return;
      setCaretToEnd(prevBlockElm);
    }
  }, [blocks, currentBlockId, prevBlocks]);

  const updateBlockHandler = (currentBlockId: string, value: string): void => {
    setBlocks(prevBlocks =>
      map<Block, Block>(block => (block.id === currentBlockId ? { ...block, html: value } : block))(
        prevBlocks
      )
    );
  };
  const addBlockHandler = (currentBlockId: string): void => {
    setCurrentBlockId(currentBlockId);
    const newBlock = { id: objectId(), html: '', tag: 'p', flag: 1 };
    setBlocks(prevBlocks => {
      return pipe(
        findIndex<Block>(block => block.id === currentBlockId),
        insertIndex => insert(insertIndex + 1, newBlock, prevBlocks)
      )(prevBlocks);
    });
  };

  const removeBlockHandler = (currentBlockId: string) => {
    setCurrentBlockId(currentBlockId);
    const currentBlockLength = blocks.length;
    if (currentBlockLength <= 1) return;
    setBlocks(prevBlocks => {
      return prevBlocks.filter(block => block.id !== currentBlockId);
    });
  };

  const upDownBlockHandler = (currentBlockId: string, direction: string) => {
    setCurrentBlockId(currentBlockId);
    console.log('blocks', blocks);
    const currentBlockPosition = findIndex<Block>(block => block.id === currentBlockId)(blocks) + 1;
    if (!(currentBlockPosition <= 1) && direction === 'ArrowUp') {
      const prevElm: HTMLElement | null = document.querySelector(
        `[data-position="${currentBlockPosition - 1}"]`
      );
      if (!prevElm) return;
      setCaretToEnd(prevElm);
    }
    if (blocks.length > currentBlockPosition && direction === 'ArrowDown') {
      const nextElm: HTMLElement | null = document.querySelector(
        `[data-position="${currentBlockPosition + 1}"]`
      );
      if (!nextElm) return;
      setCaretToEnd(nextElm);
    }
  };

  return (
    <EditorContainer>
      {blocks.map((props, idx) => {
        const position = findIndex<Block>(block => block.id === props.id)(blocks) + 1;
        return (
          <EditableBlock
            {...props}
            position={position}
            key={idx}
            updateBlock={updateBlockHandler}
            addBlock={addBlockHandler}
            removeBlock={removeBlockHandler}
            upDownBlock={upDownBlockHandler}
          />
        );
      })}
    </EditorContainer>
  );
};
