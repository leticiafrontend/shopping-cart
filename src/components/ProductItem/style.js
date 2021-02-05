import styled from 'styled-components';

export const Product = styled.div`
  display: flex;
  column-gap: 40px;
  background: #fff;
  box-shadow: 0px 0px 0px 1px #d1d5db;
  border-radius: 8px;
  transition: background 0.3s ease-in;
  &:hover {
    background: #f3f4f6;
  }
  @media (max-width: 708px) {
    column-gap: 20px;
  }
`;

export const Thumb = styled.img`
  width: 124px;
  height: 124px;
  border-radius: 8px;
  object-fit: cover;
  @media (max-width: 580px) {
    width: 90px;
    height: 90px;
  }
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 70px;
  @media (max-width: 1280px) {
    column-gap: 30px;
  }
  @media (max-width: 708px) {
    font-size: 14px;
  }
  @media (max-width: 550px) {
    column-gap: 20px;
  }
  @media (max-width: 440px) {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-right: 20px;
    row-gap: 3px;
  }
`;

export const Div = styled.div`
  @media (min-width: 800px) {
    &:nth-child(1) {
      width: 135px;
    }
  }
  @media (max-width: 550px) {
    &:nth-child(1) {
      width: 100%;
    }
    &:nth-child(3) {
      display: none;
    }
  }
  @media (max-width: 440px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const InfoLabel = styled.p`
  color: #6b7280;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 5px;
  @media (max-width: 708px) {
    margin-bottom: 0;
    font-size: 14px;
  }
`;

export const LikedNumber = styled.p`
  display: flex;
  align-items: center;
  column-gap: 5px;
`;

export const Counter = styled.div`
  display: flex;
  font-weight: bold;
  align-items: center;
  column-gap: 10px;
  background: #fff;
  border: 1px solid #d1d5db;
  border-radius: 50px;
  color: #6b7280;
  margin-right: 30px;
  padding: 1px 8px;
  font-size: 14px;
  @media (max-width: 440px) {
    margin-right: 0;
    align-self: flex-end;
  }
`;

export const CounterButton = styled.button`
  font-size: 16px;
  font-weight: bold;
  padding: 2px 5px;
  border: 0;
  background: #fff;
  color: #6b7280;
  cursor: pointer;
`;
