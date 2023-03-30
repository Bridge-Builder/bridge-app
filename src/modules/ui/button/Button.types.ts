import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { DataType } from 'csstype';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  /**
   * Button Variant
   */
  variant?: 'contained' | 'text' | 'outlined';
  /**
   * 버튼의 폰트 사이즈를 지정합니다.
   */
  size?: string;
  /**
   * 버튼에 링크를 연결합니다.
   */
  href?: string;
  /**
   * 버튼의 배경색을 지정합니다.
   */
  color?: DataType.Color;
  /**
   * 버튼의 글자색을 지정합니다.
   */
  fontColor?: DataType.Color;
  /**
   * Icon before children
   */
  startIcon?: ReactNode;
}
