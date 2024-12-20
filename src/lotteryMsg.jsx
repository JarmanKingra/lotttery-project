
export default function LotteryMsg ({random, winningSit}) {
    return <> 
    {winningSit(random) && <h3 style={{color: "green"}}>You won the lottery!</h3>}
</>
}
   