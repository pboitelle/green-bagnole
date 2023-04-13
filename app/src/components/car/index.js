import { h } from 'preact';
import Carroussel from '../carroussel';
import CarInfo from '../carInfo';

const images = [
  '../../assets/car-one.webp',
  '../../assets/car-two.webp',
];

const Car = () => {
  return (
    <div className="discovery-page">
        <Helmet	
          title="Voiture DB11" 
          meta={[
            { name: 'description', content: 'Description de la voiture DB11' },
            { name: 'keywords', content: 'Description de la voiture DB11' },
          ]}
        />
      <Carroussel images={images} lazyLoad={true}/>
      <h3 class="carousel-h3">DB11</h3>
      <CarInfo />
    </div>
  );
};

export default Car;
