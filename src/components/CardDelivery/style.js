import styled from 'styled-components';

export const Card = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 0px 1px #d1d5db;
  border-radius: 4px;
  padding: 25px;
  max-width: 307px;
  min-width: 243px;
  @media (max-width: 440px) {
    max-width: 100%;
  }
`;

export const Type = styled.h4`
  font-size: 16px;
  color: #333945;
  font-weight: 700;
  text-transform: uppercase;
`;

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: #6b7280;
  margin: 10px 0;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
`;

export const Price = styled.p`
  color: #333945;
  font-weight: 700;
  font-size: 14px;
`;

export const ButtonSelect = styled.button`
  background: #6d28d9;
  border-radius: 4px;
  color: #fff;
  padding: 10px 25px;
  border: 0;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: opacity 0.3s ease-in;
  &:hover {
    opacity: 0.9;
  }
`;
