import { FC } from 'react';
import { ButtonProps } from '@/modules/ui/button/Button.types';
import { StyledButton } from '@/modules/ui/button/Button.styles';

const Button: FC<ButtonProps> = props => {
  const { children } = props;

  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
