import './App.css';
import Boton from './components/Boton';
import CuentaRegresiva from './components/CuentaRegresiva';
import Ubicación from './components/Ubicación';
import Carousel from 'nuka-carousel';

function App() {
  return (
    <div className="App">
      <span className='playText' >Dame Play...</span>
      <span className='flechita'>↪</span>
      <div className='container'>
        <audio
        className='audio'
        autoPlay
        controls
        >
          <source src="https://res.cloudinary.com/dhjbyazal/video/upload/v1667783604/Anita/y2mate.com_-_Nicki_Nicole_Baby_Official_Video_64kbps_eeu2kg.mp3" type='audio/mp3' />
        </audio>
        <div className='nameContainer'>
          <h1 className='name'>Anita</h1>
          <h3 className='Mis15'>Mis 15</h3>
        </div>
          <h3>Te invito a compartir mis 15 años...</h3>
        <CuentaRegresiva />
        <Ubicación 
          nombre={'"Quinta Las Carretas"'}
          direccion={'Mexico y Güemes'}
          localidad={'El Medanito, Rawson'}
        />
        <div className='carouselContainer' >
          <Carousel className='carousel' slidesToShow={1} cellSpacing={130} autoplay={true} animation='fade' withoutControls={true} dragging={true} >
          <img className='imagenes' src='https://res.cloudinary.com/dhjbyazal/image/upload/v1667781030/Anita/Imagen_de_WhatsApp_2022-11-06_a_las_20.53.25_cuadrada_af7gqm.jpg' />
          <img className='imagenes' src='https://res.cloudinary.com/dhjbyazal/image/upload/v1667781031/Anita/adsasdf_sbd3pt.jpg' />
          <img className='imagenes' src='https://res.cloudinary.com/dhjbyazal/image/upload/v1667781030/Anita/Imagen_de_WhatsApp_2022-11-03_a_las_11.56.36_osknpc.jpg' />
          <img className='imagenes' src='https://res.cloudinary.com/dhjbyazal/image/upload/v1667781029/Anita/Imagen_de_WhatsApp_2022-11-03_a_las_11.58.04_cuadrada_auqqk9.jpg' />
          <img className='imagenes' src='https://res.cloudinary.com/dhjbyazal/image/upload/v1667781030/Anita/Imagen_de_WhatsApp_2022-11-03_a_las_12.05.34_skjw0d.jpg' />
          <img className='imagenes' src='https://res.cloudinary.com/dhjbyazal/image/upload/v1667781031/Anita/Imagen_de_WhatsApp_2022-11-06_a_las_20.54.57_cuadrada_ubbabp.jpg' />
          <img className='imagenes' src='https://res.cloudinary.com/dhjbyazal/image/upload/v1667781030/Anita/afdasdf_rwyoih.jpg' />
          <img className='imagenes' src='https://res.cloudinary.com/dhjbyazal/image/upload/v1667781030/Anita/Imagen_de_WhatsApp_2022-11-03_a_las_11.58.06_cuadrada_hzxuki.jpg' />
          <img className='imagenes' src='https://res.cloudinary.com/dhjbyazal/image/upload/v1667781031/Anita/Imagen_de_WhatsApp_2022-11-06_a_las_20.57.26_cuadrada_d4ugsg.jpg' />
          <img className='imagenes' src='https://res.cloudinary.com/dhjbyazal/image/upload/v1667781031/Anita/Imagen_de_WhatsApp_2022-11-06_a_las_20.56.01_cuadrada_yan4gj.jpg' />
          <img className='imagenes' src='https://res.cloudinary.com/dhjbyazal/image/upload/v1667782219/Anita/Imagen_de_WhatsApp_2022-11-06_a_las_21.41.00_cuadrada_qlki1y.jpg' />
          <img className='imagenes' src='https://res.cloudinary.com/dhjbyazal/image/upload/v1667781030/Anita/Imagen_de_WhatsApp_2022-11-03_a_las_11.59.29ad_jcdkc6.jpg' />
          <img className='imagenes' src='https://res.cloudinary.com/dhjbyazal/image/upload/v1667781029/Anita/Imagen_de_WhatsApp_2022-11-03_a_las_11.58.05_cuadrada_cvfzmx.jpg' />
          <img className='imagenes' src='https://res.cloudinary.com/dhjbyazal/image/upload/v1667781032/Anita/Imagen_de_WhatsApp_2022-11-06_a_las_21.00.17_cuadrada_pwpxre.jpg' />
          <img className='imagenes' src='https://res.cloudinary.com/dhjbyazal/image/upload/v1667781030/Anita/Imagen_de_WhatsApp_2022-11-03_a_las_11.59.53_cuadrada_gfhgmq.jpg' />
          </Carousel>
        </div>
        <h3>Confirmá tu asistencia:</h3>
        <a href='https://wa.link/65ahvg'>
          <Boton texto={'Confirmar'} />
        </a>
      </div>
    </div>
  );
}

export default App;
