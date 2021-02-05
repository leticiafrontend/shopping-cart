import styled from 'styled-components';

export const ContainerAlert = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const AlertNotification = styled.div`
  background-color: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
  padding: 10px 20px 9px;
  margin-bottom: 50px;
`;

export const Icon = styled.img`
  width: 16px;
  height: 16px;
  object-fit: cover;
`;

export const Text = styled.p`
  color: #9ca3af;
  font-size: 14px;
  font-weight: 400;
`;
