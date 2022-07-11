import './styles.scss';
import dot from '../../assets/dot.png'
import activedot from '../../assets/activedot.png'

export const Slider = () => {
  return (
    <div className="slider">
      <h1 className="slider__title">The Power of Simlicity</h1>
      <p className="slider__description">Instead of spending time searching for the right app, our Al will bring the right app to you.</p>
      <button className="slider__btn">Learn</button>
      <section className="slider__dots">
        <img className="slider__dot" src={dot} alt="dot" />
        <img className="slider__dot" src={dot} alt="dot" />
        <img className="slider__dot_active" src={activedot} alt="activedot" />
        <img className="slider__dot" src={dot} alt="dot" />
        <img className="slider__dot" src={dot} alt="dot" />
      </section>
    </div>
  )
}