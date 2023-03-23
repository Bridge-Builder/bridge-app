import styled from '@emotion/styled';
import Link from 'next/link';

export const SelectPannelBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  padding: 30px 0;
  border: 1px solid #000;
  border-radius: 4px;
  :nth-child(1) {
    margin-right: 100px;
  }
`;

export const SelectPannelTitle = styled.strong`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 20px;
`;

export const SelectPannelDesc = styled.div``;

export const SelectPannelBtn = styled(Link)`
  border: 1px solid #000;
  background: aquamarine;
`;
