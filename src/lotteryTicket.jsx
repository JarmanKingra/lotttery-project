export default function LotteryTicket ({random, sum, RandomNumber}) {
    return <>
              <h3>Lottery Ticket : {random}</h3>
              <h4>The sum of Numbers : {sum}</h4>
              <button onClick={RandomNumber}>Buy Ticket</button>
    </>
} 