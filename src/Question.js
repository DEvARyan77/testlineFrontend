import { useEffect, useState } from 'react';
import './Question.css';
// import Arrow from './arrow.png';

function Question({ question, handleNext , marks,setMarks,timer}) {
  const [option, setOption] = useState('option1');
  const [submitted, setSubmitted] = useState(false);
  const [description, setDescription] = useState(false);
  const [detail, setDetail] = useState(false);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(null);

  // Shuffle the options array using Fisher-Yates shuffle algorithm
  function shuffleOptions(options) {
    const shuffled = [...options];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
    }
    return shuffled;
  }

  // Initialize the shuffled options and the correct answer index
  useEffect(() => {
    if (question && question.options) {
      const shuffled = shuffleOptions(question.options);
      setShuffledOptions(shuffled);
      const correctIndex = shuffled.findIndex(
        (option) => option.is_correct === true
      );
      setCorrectAnswerIndex(correctIndex);
    }
  }, [question]);

  function buttonClick(e) {
    if (submitted) {
      return;
    }
    const selectedOptions = document.getElementsByClassName('optionSelect');
    Array.from(selectedOptions).forEach((option) => {
      option.style.border = '1px solid #D3D5D7';
    });
    e.target.querySelector('#optionSelect').style.border = '5px solid #D3D5D7';
    setOption(e.target.id);
  }

  function submit() {
    if (submitted) {
      return;
    }
    console.log(option);
    console.log(shuffledOptions[option.slice(-1)].is_correct);
    console.log(document.getElementById(option));

    if (shuffledOptions[option.slice(-1)].is_correct) {
      document.getElementById(option).style.border = '1px solid green';
      document.getElementById(option).style.backgroundColor = '#CDE7CA';
      document.getElementById(option).querySelector('#optionSelect').style.border =
        '4px solid green';
        setMarks(marks+4)
    } else {
      document.getElementById(option).style.border = '1px solid red';
      document.getElementById(option).style.backgroundColor = '#FFC9BC';
      document.getElementById(option).querySelector('#optionSelect').style.border =
        '4px solid red';
        setMarks(marks-1)
    }
    setDetail(true);
    setDescription(true);
    setSubmitted(true); // Mark the question as submitted
  }

  function Next() {
    console.log(option)
    document.getElementById(option).style.border = '2px solid #D3D5D7';
    document.getElementById(option).style.backgroundColor = 'transparent';
    document.getElementById(option).querySelector('#optionSelect').style.border ='2px solid #D3D5D7';
    // setOption(option1);
    setSubmitted(false);
    setDescription(false);
    handleNext();
  }

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
};

  return (
    <div id="questionScreen">
      <h1 id="question">{question.topic}<p style={{margin:'0px'}}>{formatTime(timer)}</p></h1>
      <div id="whole">
        <div id="questionWindow">
          <h2>{question.description}</h2>
          <div id="options">
            {shuffledOptions.map((option, index) => (
              <p
                key={index}
                id={`option${index}`}
                className="option"
                onClick={buttonClick}
              >
                <div id="optionSelect" className="optionSelect"></div>
                {option.description}
              </p>
            ))}
          </div>
          {description ? (
            <div>
              <p id="solution">{question.detailed_solution}</p>
            </div>
          ) : null}
        </div>
      </div>
      <div id="questionButton">
      <div id='startButton' style={{marginTop:'30px',backgroundColor:'#A0D3A1'}} onClick={submit}>
                    {/* <img src={Arrow} id='ArrowLeft' alt='ArrowLeft'></img> */}
                    <span style={{zIndex:'2',transform:'translateX(28px)'}}>Submit</span>
                    {/* <img src={Arrow} id='ArrowRight' alt='ArrowRight'></img> */}
                    <div id='startScreenOver'>
                        <h1>Hellosdsdsds</h1>
                    </div>
                </div>
                <div style={{display:'flex'}}>
                    <div id='startButton' style={{marginTop:'30px',marginLeft:'10px',backgroundColor:'#A0D3A1'}} onClick={Next}>
                        {/* <img src={Arrow} id='ArrowLeft' alt='ArrowLeft'></img> */}
                        <span style={{zIndex:'2',transform:'translateX(28px)'}}>Next</span>
                        {/* <img src={Arrow} id='ArrowRight' alt='ArrowRight'></img> */}
                        <div className='startScreenOver'>
                            <h1>Hellosdsdsd</h1>
                        </div>
                    </div>
                </div>
      </div>
    </div>
  );
}

export default Question;
