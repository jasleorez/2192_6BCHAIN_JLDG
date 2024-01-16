
import './Demo.css'
function Rainy(){ 
    return(
    <h1 className='demo2'>
        Bring your umbrella!
    </h1>
    );
}


function RainOrShine(props) { 
    const isRainy = props.isRainy; 
    if(isRainy){
        return(
        <Rainy/>
        );
    }
    return(
        <h1>No rain today!</h1>
    );
}
export default function Application(){
    return(
        <div>
            <RainOrShine
                isRainy={true}
            />
        </div>
    )
}