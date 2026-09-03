import { useState } from 'react'

function App() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    if (email.trim()) setSubscribed(true)
  }

  return (
    <main className="min-h-screen bg-slate-800 px-3 py-3 sm:px-5 sm:py-5">
      <section className="mx-auto flex min-h-[calc(100vh-1.5rem)] max-w-[760px] flex-col overflow-hidden rounded-[10px] border-2 border-slate-900 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.18)] sm:min-h-[calc(100vh-2.5rem)]">
        <header className="relative flex min-h-[102px] items-center justify-center overflow-hidden bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 px-6 py-7 text-center text-white sm:min-h-[104px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.16),transparent_38%),radial-gradient(circle_at_90%_100%,rgba(255,255,255,0.12),transparent_40%)]" />
          <h1 className="relative text-[22px] font-extrabold tracking-[-0.02em] sm:text-[23px]">News you can Trust.</h1>
        </header>
        <div className="flex flex-1 flex-col items-center justify-center px-5 py-9 text-center sm:px-8 sm:py-12">
          <div className="w-full max-w-[560px]">
            <h2 className="text-[20px] font-bold leading-tight text-slate-900 sm:text-[21px]">Stay up to date with the Latest!</h2>
            <p className="mt-2 text-[17px] font-medium leading-snug text-slate-800 sm:text-[18px]">Subscribe to our newsletter for the latest news straight into your inbox</p>
            <form className="mx-auto mt-4 flex w-full max-w-[305px] flex-col gap-2" onSubmit={handleSubmit}>
              <label className="sr-only" htmlFor="email">Email address</label>
              <input className="h-11 rounded-lg border border-slate-200 bg-slate-200/90 px-4 text-center text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-200" id="email" name="email" onChange={(event) => { setEmail(event.target.value); setSubscribed(false) }} placeholder="you@example.com" required type="email" value={email} />
              <button className="h-10 rounded-full bg-blue-500 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 active:scale-[0.99]" type="submit">{subscribed ? 'You are subscribed!' : 'Subscribe Now'}</button>
            </form>
            <p className="mt-5 text-[16px] font-medium text-slate-800">We value your privacy</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
