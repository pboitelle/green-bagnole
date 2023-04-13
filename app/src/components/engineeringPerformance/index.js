import { h } from 'preact';
import { lazy } from 'preact/compat';

const portraitSrc = '../../assets/roberto-fedeli.webp';
const carImageOneSrc = '../../assets/car-interior.webp';
const carImageTwoSrc = '../../assets/car-paysage.webp';

const EngineeringPerformance = () => (
  <div class="engineering-performance-container">
    <div class="engineering-performance-text">
      <h2>Ingénierie et Performance</h2>
      <p class="engineering-performance-text-p">La DB11 est une voiture de luxe connue pour ses performances exceptionnelles. Mais elle peut aussi être respectueuse de l'environnement grâce à son moteur hybride.</p>
      <p class="engineering-performance-text-p">La technologie hybride permet une réduction des émissions de gaz à effet de serre, ce qui contribue à la protection de l'environnement. </p>
      <div class="engineering-performance-portrait">
        <image>
          <source srcSet={portraitSrc} alt="portrait" loading="lazy" type="image/webp"/>
          <img height="50" width="90" decoding="async" loading="lazy" src="../../assets/roberto-fedeli.webp" alt="an webp image" />
        </image>
        <div class="engineering-performance-nj">
          <p class="portrait-name">Roberto Fedeli</p>
          <p class="portrait-job">Directeur Général</p>
        </div>
      </div>
    </div>
    <div class="engineering-performance-images">
      <div class="engineering-performance-image">
        <image>
          <source srcSet={carImageOneSrc} alt="car one" loading="lazy" type="image/webp"/>
          <img height="auto" width="100%" decoding="async" loading="lazy" src="../../assets/car-interior.webp" alt="an webp image" />

        </image>
      </div>
      <div class="engineering-performance-image">
        <image>
          <source srcSet={carImageTwoSrc} alt="car one" loading="lazy" type="image/webp"/>
          <img height="auto" width="100%" decoding="async" loading="lazy" src="../../assets/car-paysage.webp" alt="an webp image" />

        </image>
      </div>
    </div>
  </div>
);

export default EngineeringPerformance;
