import react from 'react'
import Purchases from './purchases'
import Reward from './reward'

class Customer extends React.Component{
    render(){
        return(
            <div>
                {/* Hold cards with info, display profile info for customer */}
                <h1>Welcome John</h1>

                <div className='container-fluid d-flex content-justify-center'>
                    <div className='row'>
                        <div className='col-md-3'><h3>Today's purchase total</h3>
                            <Purchases></Purchases>
                            <Reward></Reward>
                        </div>
                        <div className='col-md-3'><h3>30 Day purchase total</h3>
                            <Purchases></Purchases>
                            <Reward></Reward>
                        </div>
                        <div className='col-md-3'><h3>60 Day purchase total</h3>
                            <Purchases></Purchases>
                            <Reward></Reward>
                        </div>
                        <div className='col-md-3'><h3>90 Day purchase total</h3>
                            <Purchases></Purchases>
                            <Reward></Reward>
                        </div>                           
                    </div>
                </div>
            </div>
        )
    }
}

export default Customer;