import './StartingScreen.css'
import Arrow from '../src/Image/arrow.png'

function StartingScreen({heading,topic,setStartingScreen,setRulesScreen}){
    return(
        <div id='startScreen'>
            <h1>{heading}</h1>
            <h2>{topic}</h2>
            <div id='startButton' onClick={()=>(setStartingScreen(false),setRulesScreen(true))}>
                <img src={Arrow} id='ArrowLeft' alt='ArrowLeft'></img>
                <p>Start</p>
                <img src={Arrow} id='ArrowRight' alt='ArrowRight'></img>
                <div id='startScreenOver'>
                    <h1>Hellosdsdsds</h1>
                </div>
            </div>
        </div>
    )
}

export default StartingScreen;