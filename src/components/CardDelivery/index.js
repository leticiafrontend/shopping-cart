import React, { useState } from 'react';
import {
  ButtonSelect,
  Card,
  CardFooter,
  Description,
  Price,
  Type,
} from './style';

export const CardDelivery = (props) => {
  const [selected, setSelected] = useState(false);
  const selectedFreight = props.selected;
  const name = props.type;

  const freightSelected = () => {
    if (selected && selectedFreight[name]) {
      setSelected(false);
      props.freight(0, props.type);
    } else {
      setSelected(true);
      props.freight(props.cost, props.type);
    }
  };

  const styleSelectCard = {
    boxShadow: '0px 0px 0px 2px #492BC4',
    background: '#F5F3FF',
  };

  const styleSelectButton = {
    background: '#10B981',
  };

  const handleClick = () => {
    freightSelected();
  };

  return (
    <Card style={selected && selectedFreight[name] ? styleSelectCard : {}}>
      <Type>{props.type}</Type>
      <Description dangerouslySetInnerHTML={{ __html: props.description }} />
      <CardFooter>
        <Price>
          {props.cost.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </Price>
        <ButtonSelect
          style={selected && selectedFreight[name] ? styleSelectButton : {}}
          onClick={handleClick}
          id={props.keyid}
        >
          {selected && selectedFreight[name] ? 'Selecionado' : 'Selecionar'}
        </ButtonSelect>
      </CardFooter>
    </Card>
  );
};
