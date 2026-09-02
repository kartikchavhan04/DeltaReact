import {useState} from "react";

export default function Counter(){
    let [count, setCount] = useState(0);
    function incCount(){
        setCount(count + 1);
        console.log(count);
    };

    return (
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">Click counter</p>
                        <div className="mt-5 flex items-end justify-between gap-4">
                            <div>
                                <p className="text-5xl font-black tracking-tight text-slate-950">{count}</p>
                                <p className="mt-1 text-sm text-slate-500">clicks recorded</p>
                            </div>
                            <button className="rounded-xl bg-amber-400 px-4 py-3 text-sm font-black text-amber-950 transition hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2" onClick={incCount}>Increase</button>
                        </div>
        </div>
    );
}