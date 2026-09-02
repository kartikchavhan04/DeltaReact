import './App.css'
import Counter from './Counter'
import LikeButton from './LikeButton'
import TodoList from './TodoList'
import Lottery from './Lottery'
import Ticket from './Ticket'
import { sum } from './helper'

function App() {

  let winCondition = (ticket) => {
    return sum(ticket) === 15;
  }

  return (
    <main className="min-h-screen bg-[#f5f7fb] px-4 py-8 text-slate-900 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 flex flex-col justify-between gap-5 border-b border-slate-200 pb-7 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-cyan-600">React state lab</p>
            <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Small states, real feedback.</h1>
            <p className="mt-3 max-w-xl text-base leading-7 text-slate-500">A hands-on dashboard for experimenting with state, events, and tiny wins.</p>
          </div>
          <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-500 shadow-sm">4 interactive exercises</div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Lottery n={3} winCondition={winCondition} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            <Counter />
            <LikeButton />
          </div>
        </section>

        <section className="mt-6">
          <TodoList />
        </section>
      </div>
    </main>
  )
}

export default App
