import './IndexHome.scss';
import { Titulo } from '../titulo/Titulo';
import { Destacados } from './Destacados';
import { Galeria } from './Galeria';
import banner from '../../images/28991.jpg'
import 'react-loading-skeleton/dist/skeleton.css'
import { Fragment } from 'react';
import { CarouselOfertas } from './CarouselOfertas';

const IndexHome = () => {
    return (
    <Fragment>
        <div className="banner"><img src={banner} alt="banner"/></div>
        <Titulo message="¡¡ ofertas imperdibles !!"/>
        <CarouselOfertas category={"ofertas"}/>
        <Titulo message="productos destacados" />
        <Destacados category="lacteos"/>
        <Titulo message="en bimark nos interesa lo que te conviene" />
        <Galeria />
      </Fragment>
    )
}

export default IndexHome
