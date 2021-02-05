import React, { useEffect, useState } from 'react';
import {
  Aside,
  ButtonCheckout,
  CounterCart,
  DeliveryList,
  Header,
  HeaderCart,
  Page,
  Products,
  Section,
  TitleDelivery,
  Total,
  TotalFreight,
  TotalP,
  TotalPrice,
} from './styles/style';
import GlobalStyle from './styles/global';
import bagCart from './images/icon-bag.svg';
import check from './images/check.svg';
import alert from './images/alert-red.svg';
import { ProductItem } from './components/ProductItem';
import { CardDelivery } from './components/CardDelivery';
import { Spinner } from './components/Spinner';
import { Alert } from './components/Alert';

export const App = () => {
  const [freight, setFreight] = useState('');
  const [products, setProducts] = useState('');
  const [addCart, setAddCart] = useState(0);
  const [totalCart, setTotalCart] = useState(0);
  const [priceFreight, setPriceFreight] = useState(0);
  const [notification, setNotification] = useState(false);
  const [selected, setSelected] = useState({
    CORREIOS: false,
    TRANSPORTADORA: false,
  });

  useEffect(() => {
    fetch(
      'https://noy33phhn9.execute-api.us-east-1.amazonaws.com/dev/api/freight',
    )
      .then((response) => response.json())
      .then((json) => setFreight(json));

    fetch(
      'https://noy33phhn9.execute-api.us-east-1.amazonaws.com/dev/api/products',
    )
      .then((response) => response.json())
      .then((json) => setProducts(json));
  }, []);

  const counterPlus = () => {
    setAddCart((addCart) => addCart + 1);
  };

  const counterMinus = () => {
    setAddCart((addCart) => addCart - 1);
  };

  const addItem = (value) => {
    setTotalCart(totalCart + value);
  };

  const removeItem = (value) => {
    setTotalCart(totalCart - value);
  };

  const addFreight = (value, name) => {
    setPriceFreight(value);
    if (name === 'CORREIOS') {
      setSelected({ ...selected, CORREIOS: true, TRANSPORTADORA: false });
    } else if (name === 'TRANSPORTADORA') {
      setSelected({ ...selected, CORREIOS: false, TRANSPORTADORA: true });
    }
  };

  const checkout = () => {
    setNotification(true);
    if (totalCart && priceFreight) {
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      setTimeout(() => {
        setNotification(false);
      }, 1000);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Page className="App">
        <Section>
          <Header>
            <HeaderCart>Meu carrinho</HeaderCart>
            <CounterCart>
              <img src={bagCart} alt="icon-bag" />
              {addCart} Itens
            </CounterCart>
          </Header>
          <Products>
            {products ? (
              products.map((item, index) => (
                <ProductItem
                  key={index}
                  name={item.name}
                  price={item.price}
                  stock={item.stock}
                  likes={item.likes}
                  image={item.image}
                  plus={counterPlus}
                  minus={counterMinus}
                  addPriceItem={addItem}
                  removePriceItem={removeItem}
                />
              ))
            ) : (
              <Spinner />
            )}
          </Products>
        </Section>
        <Aside>
          <TitleDelivery>Método de entrega</TitleDelivery>
          <DeliveryList>
            {freight ? (
              freight.map((item, index) => (
                <CardDelivery
                  key={index}
                  type={item.type}
                  description={item.description}
                  cost={item.cost}
                  freight={addFreight}
                  selected={selected}
                />
              ))
            ) : (
              <Spinner />
            )}
          </DeliveryList>
          <Total>
            <TotalP>Total</TotalP>
            <TotalPrice>
              {(totalCart + priceFreight).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </TotalPrice>
            <TotalFreight>Frete incluso</TotalFreight>
          </Total>
          <ButtonCheckout onClick={checkout}>Finalizar compra</ButtonCheckout>
        </Aside>
        {notification ? (
          <Alert
            image={totalCart && priceFreight ? check : alert}
            text={
              totalCart && priceFreight
                ? 'Pedido feito com sucesso'
                : 'Escolha pelo menos um produto e o frete'
            }
          />
        ) : (
          ''
        )}
      </Page>
    </>
  );
};
