import './Bar.css'

function Bar(props){
    return(
        <div style = {{'height' : props.height}} className="bar">
        </div>
    );
}

export default Bar;