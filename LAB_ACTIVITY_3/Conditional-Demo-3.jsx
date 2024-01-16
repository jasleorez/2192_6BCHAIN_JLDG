
import './Demo.css'
function Rainy(){ 
    return(
    <h1 className='demo2'>
        Bring your umbrella!
    </h1>
    );
}

function Sunny(){ 
    return(
    <h1 className='demo3'>
        Bring your sunglasses!
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
        <Sunny/>
    );
}
export default function Application2(){
    return(
        <div>
            <RainOrShine
                isRainy={false}
            />
        </div>
    )
}