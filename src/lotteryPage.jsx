import { useState } from "react"
import LotteryMsg from "./lotteryMsg.jsx";
import LotteryTicket from "./lotteryTicket.jsx";
import Instructions from "./Instruction.jsx"

export default function Lottery () {

    let [random, setRandom] = useState(0);
    let [sum, setsum] = useState(0);

    let RandomNumber = () => {
        let randomNumber = Math.floor(Math.random()*999)
        setRandom(randomNumber);

        let sumOfNumber = randomNumber
        .toString()
        .split("")
        .map(Number)
        .reduce((curr, acc) => curr + acc, 0);

        setsum(sumOfNumber);
    }


    return (
        <div>
            <Instructions/>
            <LotteryMsg sum={sum}/>
            <LotteryTicket random={random} sum={sum} RandomNumber={RandomNumber}/> 
        </div>
    )
}