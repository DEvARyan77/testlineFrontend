import Arrow from '../src/Image/arrow.png'

function RulesScreen({setQuestionScreen,setRulesScreen}){
    return(
        <div id='startScreen'>
            <div style={{width:'fit-content'}}>
                <h1>Instructions</h1>
                <p>For every correct answer <span style={{color:'#248C46'}}>4</span> marks will be awarder.</p>
                <p>For every incorrect answer <span style={{color:'red'}}>1</span> mark will be deducted.</p>
                <p>You are given 15 minutes to complete this test.</p>
                <p>For every question there will be one correct answer.</p>
                <div id='startButton' style={{marginTop:'30px'}} onClick={()=>(setQuestionScreen(true),setRulesScreen(false))}>
                    <img src={Arrow} id='ArrowLeft' alt='ArrowLeft'></img>
                    <p>Start</p>
                    <img src={Arrow} id='ArrowRight' alt='ArrowRight'></img>
                    <div id='startScreenOver'>
                        <h1>Hellosdsdsds</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RulesScreen;