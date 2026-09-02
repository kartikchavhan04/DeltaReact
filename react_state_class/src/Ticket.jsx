import TicketNum from "./TicketNum";

export default function Ticket({ ticket}) {
    return ( 
    <div className="flex gap-3" aria-label="Lottery ticket numbers">
        {ticket.map((num, idx) => (
            <TicketNum key={idx} num={num} />
        ))}

    </div>
    );
}