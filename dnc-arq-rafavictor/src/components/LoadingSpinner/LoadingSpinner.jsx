import './LoadingSpinner.css'
import LoadingGif from '../../assets/Loading.gif'

function LoadingSpinner() {
  return (
    <div className="dFlex alCenter jcCenter loadingOverlayContainer">
        <img src={LoadingGif} alt="Loading" height="80px"/>
    </div>
  )
}

export default LoadingSpinner