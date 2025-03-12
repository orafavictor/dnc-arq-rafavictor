import './Button.css';
import  WhiteArrow from '../../assets/whiteArrow.svg';

function Button({ arrow, buttonStyle, loading, children, ...props}) {
  return (
    <button className={`button ${buttonStyle}`} {...props}>
        {children} {arrow && <img src={WhiteArrow} alt="Arrow" />}
    </button>
  );
}

export default Button;