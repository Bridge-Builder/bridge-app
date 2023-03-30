import { FC } from 'react';
import { ChipProps } from '@/modules/ui/chip/Chip.types';
import { StyledChip } from '@/modules/ui/chip/Chip.styles';

export const Chip: FC<ChipProps> = props => {
  const { label, handleDelete } = props;
  const handleOnClick = () => {
    handleDelete && handleDelete();
  };
  return (
    <StyledChip {...props}>
      <span>{label || ''}</span>
      <button onClick={() => handleOnClick()}>X</button>
    </StyledChip>
  );
};
