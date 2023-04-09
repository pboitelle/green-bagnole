// CarInfo.js
import { h } from 'preact';
import CarStats from '../carstats';
import style from './style.css';

const CarInfo = () => {
  return (
    <div className={style.CarInfo}>
      <CarStats />
      <p className={style.CarPrice}>Prix : 200 000€</p>
    </div>
  );
};

export default CarInfo;
