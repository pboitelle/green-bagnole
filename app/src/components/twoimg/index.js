import { h } from 'preact';
import { lazy } from 'preact/compat';

const carLeftImg = '../../assets/car-description.webp';
const carRightImg = '../../assets/car-motor.webp';

const TwoImg = () => (
    <div class="two-img-container">
        <div class="two-img-left">
            <image>
                <source srcSet={carLeftImg} alt="car one" loading="lazy" type="image/webp"/>
                <img height="auto" width="100%" decoding="async" loading="lazy" src="../../assets/car-description.webp" alt="an webp image" />
            </image>
        </div>
        <div class="two-img-right">
            <image>
                <source srcSet={carRightImg} alt="Motor" loading="lazy" type="image/webp"/>
                <img height="100%" width="100%" decoding="async" loading="lazy" src="../../assets/car-motor.webp" alt="an webp image" />
            </image>
        </div>
    </div>
);

export default TwoImg;
