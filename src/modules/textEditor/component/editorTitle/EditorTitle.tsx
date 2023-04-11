import { BaseSyntheticEvent, FC } from 'react';
import { EditorTitleProps } from './EditorTitle.types';

// suppressContentEditableWarning 경고 끄기

export const EditorTitle: FC<EditorTitleProps> = props => {
  const {} = props;
  const handleEditorTitle = (e: BaseSyntheticEvent) => {
    console.log(e.target.innerText);
  };

  const handleKeyDown = (e: BaseSyntheticEvent) => {
    // @ts-ignore
    if (e.code === 'Enter') {
      e.preventDefault();
    }
  };

  const handleButton = () => {
    const selectInstance = window.getSelection();
    // @ts-ignore
    const selectionText = selectInstance.toString();
    console.log('selection', selectionText, selectInstance);
  };

  return (
    <>
      <div
        onInput={e => handleEditorTitle(e)}
        onKeyDown={e => handleKeyDown(e)}
        suppressContentEditableWarning
        contentEditable={true}
      >
        정보를 입력하세요
      </div>
      <button onClick={handleButton}>bold</button>
    </>
  );
};
