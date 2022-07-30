import React from "react"
import Optt from "./Options.js"
import {nanoid} from "nanoid"

export default function Questions(props) {
    const [opt, setOpt] = React.useState(generateOptions())
   console.log(opt)
    const [sel, setSel] = React.useState(opt)
    React.useEffect(() => {
         setSel(old => old.map(item => ({
                value: item,
                on: false,
                id: nanoid()
    })))
    }, [])

    function generateOptions() {
        const optArray= []
        optArray.push(props.qs.correct_answer)
        for (let i = 0; i <= 2; i++) {
            optArray.push(props.qs.incorrect_answers[i])
            randomArrayShuffle(optArray)
        }
        return optArray  
    }
    
    function randomArrayShuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
    let flag = false
    let styles = {
        backgroundColor:  flag ? "#59E391" : "white"
        }
    function toggle() {
        const flag = false
        const styles = {
        backgroundColor:  flag ? "#59E391" : "white"
        }
    }
    
    const options = sel.map(item => {
        return <div style={styles} onClick={toggle} className="opt-face">{item.value}</div>
    })
    
    // const options = opt.map(item => {
    //     return <Optt all={item}/>
    // })
    
    return (
        <div >
            <h1 className="qs-face">{props.qs.question}</h1>
            <div className="opt-btn"><Optt slc={sel}/></div>
            <hr className="qs-line" />
        </div>
    )
}