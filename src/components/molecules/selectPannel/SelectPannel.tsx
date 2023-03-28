import { FC } from 'react';
import { SelectPannelProps } from './SelectPannel.types';
import {
  SelectPannelBox,
  SelectPannelBtn,
  SelectPannelDesc,
  SelectPannelTitle
} from '@/components/molecules/selectPannel/SelectPannel.styles';
import Image from 'next/image';

export const SelectPannel: FC<SelectPannelProps> = props => {
  const { title, description, href, buttonLabel, heroImg } = props;
  return (
    <SelectPannelBox>
      <Image src={heroImg} alt={''} width={100} height={100} />
      <SelectPannelTitle>{title}</SelectPannelTitle>
      <SelectPannelDesc>{description}</SelectPannelDesc>
      <SelectPannelBtn href={href}>{buttonLabel}</SelectPannelBtn>
    </SelectPannelBox>
  );
};
