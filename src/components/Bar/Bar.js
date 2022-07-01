import './Bar.css'

function Bar(props){
    return(
        <div style = {{'height' : `${props.height}px`}} className="bar">
            {/* <div className='v'>{props.height/5}</div> */}
        </div>
    );
}

export default Bar;