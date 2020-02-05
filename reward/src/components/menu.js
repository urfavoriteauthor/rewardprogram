import react from 'react'

class Menu extends React.Component{
    render(){
        return(
            <div>
<div className='ul'>

    {/* create value for buttons to be passed as props to the purchases component. */}
    <div className='li'><li><a href='#'>$25 Headphones</a></li></div>
    <div className='li'><li><a href='#'>$50 Headphones</a></li></div>
    <div className='li'><li><a href='#'>$75 Headphones</a></li></div>
    <div className='li'><li><a href='#'>$100 Headphones</a></li></div>
</div>
            </div>
        )
    }
}
export default Menu;