import React, {useState} from "react"
import qst from "./quizqs"
import Questions from "./components/Questions.js"


export default function App() {
    const [quest, setQuest] = useState(qst.results)
    
    const data = quest.map(item => {
            return <Questions key={item.question} qs={item}/>
    })
    
    return (
        <main>
            <div>
                {data}
                <button className="main-btn">Check Answers</button>
            </div>
           {/* {quest.length > 1 
            ?
            <div>{quest}</div>
            :
            <div className="main">
                <h1 className="head">Quizzical</h1>
                <h3 className="desc">Some description if needed</h3>
                <button onClick={questions} className="main-btn">Start Quiz</button>
            </div>
            } */}
            
        </main>

    )
}