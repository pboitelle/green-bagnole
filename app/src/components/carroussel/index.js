import { h, Component } from 'preact';

class Carroussel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImageIndex: 0
    };
  }

  handleClickPrevious = () => {
    const newIndex = (this.state.currentImageIndex === 0)
      ? this.props.images.length - 1
      : this.state.currentImageIndex - 1;

    this.setState({
      currentImageIndex: newIndex
    });
  };

  handleClickNext = () => {
    const newIndex = (this.state.currentImageIndex === this.props.images.length - 1)
      ? 0
      : this.state.currentImageIndex + 1;

    this.setState({
      currentImageIndex: newIndex
    });
  };

  render() {
    const { images } = this.props;
    const { currentImageIndex } = this.state;

    return (
      <div class="carousel">
        <div class="carousel-container">
          <div class="carousel-background-image">
            {images.length && (
              <picture>
                <source srcSet={images[currentImageIndex]} type="image/webp"/>
                <img src={images[currentImageIndex]} alt="" loading="lazy" class="carousel-image" />
              </picture>
            )}
            <div class="carousel-arrow">
              <button onClick={this.handleClickPrevious} class="carousel-arrow-left">←</button>
              <button onClick={this.handleClickNext} class="carousel-arrow-right">→</button>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Carroussel;
