import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteGood } from "../../redux/ac/itemsProdavitoAc";

const ProdavitoItem = ({ el, setCard, setModals }) => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(deleteGood(el.id));
  // }, []);
  const deleteHandler = () => {
    dispatch(deleteGood(el.id));
  };



  return (
          <a className="cardprodavito" onClick={() => (setCard(el), setModals(true))}>
              <div className="cardprodavito__background"
                   style={{
                     backgroundImage: `url(http://localhost:3001/items/${el?.url})`}}></div>
              <div className="cardprodavito__content">
                  <p className="cardprodavito__category">{el?.title}</p>
                  <h3 className="cardprodavito__heading">Цена: {el?.price}₽</h3>
              </div>
          </a>
  );
};

export default ProdavitoItem;

