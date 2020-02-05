import react from 'react'
import Customer from './customer'


class Card extends React.Component{
    render(){
        return(
            <div id='maincard'className='card text-center shadow'>
            <div className='overflow'>
                <img src={props.imgsrc} alt="" className='card-img-top' />
            </div>
            <div className='card-body text-dark'>
                <Customer/>
                <h4 className='card-title'>{props.title}</h4>
                <p className="card-text text-secondary">{props.description}</p>
            <a href="#" className='btn btn-outline-success'>Purchase Here</a>
            </div>
        </div>
        )
    }
}

export default Card;