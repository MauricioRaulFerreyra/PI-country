import React from "react";
import style from "./card.module.css";
import { useHistory } from "react-router-dom";

function Card({ id, image, name, continent }) {
  const history = useHistory();
  function handleDetail(id) {
    history.push(`/detail/${id}`);
  }

  return (
    <div className={style.containerFondo}>
      <div onClick={() => handleDetail(id)} className={style.container}>
        <div className={style.containerName}>
          <h4 className={style.title}>{name}</h4>
        </div>
        <div className={style.containerImagen}>
          <img className={style.imagen} src={image} alt={name} />
          {/* <img className={style.imagen} alt={name} /> */}
        </div>
        <div className={style.containerSubtitle}>
          <h6 className={style.subTitle}>{continent}</h6>
        </div>
      </div>
    </div>
  );
}

export default Card;
