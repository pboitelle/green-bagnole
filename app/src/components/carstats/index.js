import { h } from 'preact';
import style from './style.css';

const CarStats = () => {
  const topSpeed = 180; // km/h
  const power = 54; // bhp
  const acceleration = 4.5; // s
  return (
    <div className={style.CarStats}>
      <div className={style.CarStat}>
        <div className={style.StatLabel}>Top speed :</div>
        <div className={style.StatValue}>{topSpeed} km/h</div>
        <div className={style.StatBar}>
          <div className={style.BarFill} style={{ width: `${(topSpeed / 300) * 100}%` }}></div>
        </div>
      </div>
      <div className={style.CarStat}>
        <div className={style.StatLabel}>Power :</div>
        <div className={style.StatValue}>{power} bhp</div>
        <div className={style.StatBar}>
          <div className={style.BarFill} style={{ width: `${(power / 100) * 100}%` }}></div>
        </div>
      </div>
      <div className={style.CarStat}>
        <div className={style.StatLabel}>0-100 km/h :</div>
        <div className={style.StatValue}>{acceleration} s</div>
        <div className={style.StatBar}>
          <div className={style.BarFill} style={{ width: `${(acceleration / 10) * 100}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default CarStats;
