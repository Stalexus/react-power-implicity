import './styles.scss';
import dot from '../../assets/dot.png'
import activedot from '../../assets/activedot.png'

export const Slider = () => {
  return (
    <div className="slider">
      <h1 className="slider__title">The Power of Simlicity</h1>
      <p className="slider__description">Instead of spending time searching for the right app, our Al will bring the right app to you.</p>
      <button className="slider__btn" type="button">Learn</button>
      <ul className="slider__dots">
        <li><img className="slider__dot" src={dot} alt="dot" /></li>
        <li><img className="slider__dot" src={dot} alt="dot" /></li>
        <li><img className="slider__dot_active" src={activedot} alt="activedot" /></li>
        <li><img className="slider__dot" src={dot} alt="dot" /></li>
        <li><img className="slider__dot" src={dot} alt="dot" /></li>
      </ul>
    </div>
  )
}