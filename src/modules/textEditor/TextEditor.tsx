import { FC } from 'react';
import { TextEditorProps } from './TextEditor.types';
import { EditorTitle } from '@/modules/textEditor/component/editorTitle/EditorTitle';

export const TextEditor: FC<TextEditorProps> = props => {
  const {} = props;
  return <EditorTitle />;
};
