import { h } from 'preact';
import Carroussel from '../../components/carroussel';
import CarInfo from '../../components/carInfo';
import Helmet from "preact-helmet";

const images = [
  '../../assets/car-one.webp',
  '../../assets/car-two.webp',
];

const Car = () => {
  return (
    <div className="discovery-page">
        <Helmet 
          title="Aston Martin DB11" 
          meta={[
            {"name": "description", "content": "Aston Martin DB11"},
            {"name": "keywords", "content": "aston martin, car, DB11"}
          ]}
        />
      <Carroussel images={images} lazyLoad={true}/>
      <h3 class="carousel-h3">DB11</h3>
      <CarInfo />
    </div>
  );
};

export default Car;
