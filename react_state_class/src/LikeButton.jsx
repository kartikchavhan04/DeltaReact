import {useState} from 'react';

export default function LikeButton() {
  let [liked, setLiked] = useState(false);
  let [count, setCount] = useState(0);
  
  let toggleLike = () => {
    setLiked(!liked);
    setCount(count + 1);
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-rose-600">Like button</p>
      <div className="mt-5 flex items-center justify-between gap-4">
        <div>
          <p className="text-2xl font-black text-slate-950">{liked ? "Loved it" : "Tap to like"}</p>
          <p className="mt-1 text-sm text-slate-500">{count} interaction{count === 1 ? "" : "s"}</p>
        </div>
        <button className={`flex h-14 w-14 items-center justify-center rounded-full border text-2xl transition focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2 ${liked ? "border-rose-200 bg-rose-50 text-rose-500" : "border-slate-200 bg-slate-50 text-slate-400 hover:border-rose-200 hover:text-rose-400"}`} onClick={toggleLike} aria-label={liked ? "Unlike" : "Like"} aria-pressed={liked}>
          {liked ? "♥" : "♡"}
        </button>
      </div>
    </div>
  );
}