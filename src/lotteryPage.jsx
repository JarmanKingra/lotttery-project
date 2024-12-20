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
    }

  
    let winningSit = (random) => {
        let digits = random.toString().split("");
        return digits.length === 3 && digits.every((digit) => digit === digits[0]);
    };

    return (
        <div>
            <Instructions/>
            <LotteryMsg random={random} winningSit={winningSit}/>
            <LotteryTicket random={random} sum={sum} RandomNumber={RandomNumber}/> 
        </div>
    )
}