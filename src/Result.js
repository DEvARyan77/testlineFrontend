import { useEffect, useState } from 'react';
import './Result.css';

function Result({ timer, marks }) {
    const [score, setScore] = useState(0);
    const [translate, setTranslate] = useState("translateX(-300px)");  // Initial translate
    const targetScore = (timer * marks) / (85 * 4);

    useEffect(() => {
        const interval = setInterval(() => {
            setScore((prevScore) => {
                if (prevScore < targetScore) {
                    return prevScore + 1;
                } else {
                    clearInterval(interval);  // Stop the interval when the target score is reached
                    return prevScore;
                }
            });
        }, 10);  // Set an appropriate interval (10ms here)

        return () => clearInterval(interval);  // Cleanup the interval on unmount or score change
    }, [timer, marks, targetScore]);

    // Update the translation once the score reaches the target
    useEffect(() => {
        if (score >= targetScore) {
            setTranslate(`translateX(${-300+(score/106)*300}px)`);  // Update translation when score reaches target
        }
    }, [score, targetScore]);  // Trigger translation when score changes and reaches target

    return (
        <div id="startScreen">
            <div id="resultScreen">
                <h1>Your Score</h1>
                <div id="resultOuter">
                    <div id="resultInside" style={{ transform: translate }}></div>
                    <p id='score'>{score}</p>
                </div>
            </div>
        </div>
    );
}

export default Result;
