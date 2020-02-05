import react from 'react'
import Card from './components/card'

class Main extends React.Component{
    render(){
        return(
<div>
    <h1>Beats by Nygel</h1>
    <h5>Sign up for Our Rewards Program</h5>
    <Card title='Platinum Member' last ='Last Purchase 4/12/2020'/>
</div>
        )
    }
}

export default Main;