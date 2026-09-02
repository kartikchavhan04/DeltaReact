import { useState } from "react";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({n=3, winCondition}) {
    let [ticket , setTicket] = useState(genTicket(n));
    let isWinning = winCondition(ticket);
    
    let buyTicket = () => {
        setTicket(genTicket(n));
    }

  return(
    <div className="relative overflow-hidden rounded-3xl bg-slate-950 p-6 text-white shadow-xl shadow-slate-300/50 sm:p-10">
        <div className="absolute right-0 top-0 h-40 w-40 translate-x-1/3 -translate-y-1/3 rounded-full bg-cyan-400/20 blur-2xl" />
        <div className="relative">
          <div className="mb-10 flex items-start justify-between gap-4">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">Random draw</p>
              <h2 className="text-3xl font-black tracking-tight">Lottery game</h2>
            </div>
            <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-bold text-slate-300">3 digits</span>
          </div>
          <Ticket ticket={ticket} />
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-400">Match a total of 15 to win.</p>
            <button className="rounded-xl bg-cyan-300 px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-slate-950" onClick={buyTicket}>Draw new ticket</button>
          </div>
          <p className={`mt-6 min-h-6 text-sm font-bold ${isWinning ? "text-emerald-300" : "text-slate-500"}`} aria-live="polite">
            {isWinning ? "Congratulations, you won!" : "Keep drawing. Your lucky total is out there."}
          </p>
        </div>
    </div>
  )
}