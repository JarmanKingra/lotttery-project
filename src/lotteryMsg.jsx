export default function LotteryMsg ({sum}) {
    return <> 
    {sum === 15 && <h3 style={{color: "green"}}>You won the lottery!</h3>}
</>
}
   