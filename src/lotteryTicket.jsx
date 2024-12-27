export default function LotteryTicket ({random, sum, RandomNumber}) {
    return <>
              <h3>Lottery Ticket : {random}</h3>
              <h4>If the All 3 number are same at all, i.e. 111, 222, then you won.</h4>
              <button onClick={RandomNumber}>Buy Ticket</button>
    </>
} 
