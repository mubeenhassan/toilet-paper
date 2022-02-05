import bg from '../../assets/images/home_title_background.jpg'
import '../../assets/css/home.css'
import Social from '../layout/Social'
const Home = () => {
  return (
    <div className='container'>
      <div className='home-title-sec'>
        <img className='home-bg' src={bg} alt='background' />
        <h1 className='home-title'>
        Toilet Paper Tycoon
        </h1>
        <Social/>
      </div>
    </div>
  )
}

export default Home
