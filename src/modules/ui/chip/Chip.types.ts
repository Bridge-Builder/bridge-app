import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { DataType } from 'csstype';

export interface ChipProps extends ComponentPropsWithoutRef<'span'> {
  /**
   * Chip의 형태를 결정합니다.
   * @default filled
   */
  variant?: 'filled' | 'outlined';
  /**
   * Chip의 문구를 설정합니다.
   * @requires
   */
  label: string;
  /**
   * Chip의 사이즈를 결정합니다.
   * @Default large
   */
  size?: 'large' | 'small';
  /**
   * Chip에 앞 단에 아이콘을 추가합니다.
   */
  color?: DataType.Color;
  /**
   * Chip에 앞 단에 아이콘을 추가합니다.
   */
  icon?: ReactNode;
  /**
   * Chip을 삭제하는 핸들러
   */
  handleDelete?: () => void;
}
