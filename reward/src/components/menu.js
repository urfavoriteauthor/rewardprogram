import react from 'react'

class Menu extends React.Component{
    render(){
        return(
            <div>
<div className='ul'>

    {/* create value for buttons to be passed as props to the purchases component. */}
    <div className='li'><li><a href='#'>$25 Headphones</a>
            <a href="#" className='btn btn-outline-success'>BronzePhones Purchase Here</a></li>
            </div>
    <div className='li'><li><a href='#'>$50 Headphones</a>
            <a href="#" className='btn btn-outline-success'>SilverPhones Purchase Here</a></li>
            </div>
    <div className='li'><li><a href='#'>$75 Headphones</a>
            <a href="#" className='btn btn-outline-success'>GoldPhones Purchase Here</a></li>
            </div>
    <div className='li'><li><a href='#'>$100 Headphones</a>
            <a href="#" className='btn btn-outline-success'>PlatinumPhones Purchase Here</a></li>
            </div>
</div>
            </div>
        )
    }
}
export default Menu;