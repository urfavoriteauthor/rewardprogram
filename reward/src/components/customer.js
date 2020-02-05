import react from 'react'

class Customer extends React.Component{
    render(){
        return(
            <div>
                {/* Hold cards with info, display profile info for customer */}
                <h1>Welcome John</h1>
                <div className='row'>
                    <div className='col'>Today's purchase total</div>
                    <div className='col'>30 Day purchase total</div>
                    <div className='col'>60 day Purchase total</div>
                    <div className='col'>90 Day Purchas total</div>
                </div>
            </div>
        )
    }
}

export default Customer;