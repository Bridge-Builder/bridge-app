import styled from '@emotion/styled';
import ContentEditable from 'react-contenteditable';
import { ContentEditableProps } from '@/modules/textEditor/component/editableBlock/EditableBlock.types';

const HookContentEditable = (props: ContentEditableProps) => {
  return <ContentEditable {...props} />;
};

export const StyledContentEditable = styled(HookContentEditable)(props => {
  console.log('StyledContentEditable', props);
  const { tagName } = props;
  const commonStyles = {
    display: 'inline-block',
    marginBottom: '10px',
    padding: '16px 16px',
    color: '#666',
    background: '#eee'
  };
  if (tagName === 'h1') {
    return {
      ...commonStyles,
      fontSize: '40px'
    };
  } else if (tagName === 'p') {
    return { ...commonStyles, fontSize: '20px' };
  }
});
