import styled from 'styled-components';

export const Page = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  min-height: 100vh;
  @media (max-width: 1077px) {
    display: initial;
  }
`;

export const Section = styled.section`
  padding: 50px;
  @media (max-width: 708px) {
    padding: 20px;
  }
`;

export const Aside = styled.aside`
  padding: 50px;
  background: #eff0f5;
  @media (max-width: 708px) {
    padding: 20px;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding-bottom: 15px;
  margin-bottom: 40px;
  border-bottom: 2px solid #d1d5db;
`;

export const HeaderCart = styled.h2`
  font-size: 32px;
  color: #333945;
`;

export const CounterCart = styled.p`
  display: flex;
  flex-direction: row;
  color: #333945;
  align-items: center;
  justify-content: space-between;
  column-gap: 5px;
`;

export const Products = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

export const TitleDelivery = styled.h2`
  color: #333945;
  font-size: 24px;
`;

export const DeliveryList = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  margin: 40px 0;
  @media (max-width: 1077px) {
    flex-direction: row;
    column-gap: 20px;
  }
  @media (max-width: 708px) {
    flex-direction: column;
  }
`;

export const Total = styled.div`
  margin-bottom: 80px;
`;

export const TotalP = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #333945;
`;

export const TotalPrice = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #333945;
`;

export const TotalFreight = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #6b7280;
`;

export const ButtonCheckout = styled.button`
  display: block;
  text-align: center;
  background: #000;
  border-radius: 8px;
  color: #fff;
  padding: 20px 0;
  width: 100%;
  max-width: 307px;
  font-size: 20px;
  font-weight: 700;
  border: none;
  transition: opacity 0.3s ease-in;
  &:hover {
    opacity: 0.9;
  }
  @media (max-width: 440px) {
    max-width: 100%;
  }
`;
