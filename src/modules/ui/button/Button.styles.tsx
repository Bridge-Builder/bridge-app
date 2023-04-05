import styled from '@emotion/styled';
import { ButtonProps } from '@/modules/ui/button/Button.types';

export const StyledButton = styled.button((props: ButtonProps) => {
  const { size, color, fontColor } = props;

  return { backgroundColor: color || 'red', fontColor: fontColor || '#000' };
});

export const StyledButton1 = styled(StyledButton)``;
