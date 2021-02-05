import React from 'react';
import { AlertNotification, ContainerAlert, Icon, Text } from './style';

export const Alert = (props) => {
  return (
    <ContainerAlert>
      <AlertNotification>
        <Icon src={props.image} />
        <Text>{props.text}</Text>
      </AlertNotification>
    </ContainerAlert>
  );
};
