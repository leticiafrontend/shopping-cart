import React, { useState } from 'react';
import {
  Counter,
  CounterButton,
  InfoLabel,
  Infos,
  LikedNumber,
  Product,
  Thumb,
  Div,
} from './style';
import heart from '../../images/heart.svg';
import alert from '../../images/alert.svg';
import check from '../../images/check.svg';
import { Alert } from '../Alert';

export const ProductItem = (props) => {
  const [stock, setStock] = useState(props.stock);
  const [counter, setCounter] = useState(0);
  const [notifications, setNotifications] = useState({
    success: false,
    stock: false,
    counterZero: false,
  });

  const counterStockPlus = () => {
    if (stock <= 0) {
      setNotifications({ ...notifications, stock: true });
      setTimeout(() => {
        setNotifications({ ...notifications, stock: false });
      }, 1000);
    } else {
      setStock((stock) => stock - 1);
      setCounter((counter) => counter + 1);
    }
  };

  const counterStockMinus = () => {
    if (stock >= props.stock) {
      setNotifications({ ...notifications, counterZero: true });
      setTimeout(() => {
        setNotifications({ ...notifications, counterZero: false });
      }, 1000);
    } else {
      setStock((stock) => stock + 1);
      setCounter((counter) => counter - 1);
    }
  };

  const buttonMinus = () => {
    if (stock < props.stock) {
      props.minus();
      props.removePriceItem(props.price);
    }
    counterStockMinus();
  };

  const buttonPlus = () => {
    setNotifications({ ...notifications, success: true });
    setTimeout(() => {
      setNotifications({ ...notifications, success: false });
    }, 1000);
    if (stock > 0) {
      props.plus();
      props.addPriceItem(props.price);
    }
    counterStockPlus();
  };

  return (
    <Product>
      <Thumb src={props.image} />
      <Infos>
        <Div>
          <InfoLabel>{props.name}</InfoLabel>
          <p>
            {props.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </p>
        </Div>
        <Div>
          <InfoLabel>Estoque</InfoLabel>
          <p>{stock} un.</p>
        </Div>
        <Div>
          <InfoLabel>Quem gostou?</InfoLabel>
          <LikedNumber>
            <img src={heart} alt="heart" />
            {props.likes}
          </LikedNumber>
        </Div>
        <Counter>
          <CounterButton
            style={counter === 0 ? { color: '#D1D5DB' } : {}}
            onClick={buttonMinus}
          >
            -
          </CounterButton>
          <span style={counter === 0 ? { color: '#D1D5DB' } : {}}>
            {counter}
          </span>
          <CounterButton
            style={counter === props.stock ? { color: '#D1D5DB' } : {}}
            onClick={buttonPlus}
          >
            +
          </CounterButton>
        </Counter>
      </Infos>
      {notifications.stock ? (
        <Alert image={alert} text={'Produto fora de estoque'} />
      ) : (
        ''
      )}
      {notifications.success ? (
        <Alert image={check} text={'Adicionado ao carrinho'} />
      ) : (
        ''
      )}
      {notifications.counterZero ? (
        <Alert image={alert} text={'Não há mais itens para retirar'} />
      ) : (
        ''
      )}
    </Product>
  );
};
