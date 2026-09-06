import { useState } from 'react'

function UserInput() {
    const [name, setName] = useState('')
    const [displayName, setDisplayName] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        const trimmedName = name.trim()

        if (trimmedName) {
            setDisplayName(trimmedName)
        }
    }

    function clearName() {
        setName('')
        setDisplayName('')
    }

    const hasName = displayName.length > 0

    return (
        <main className="input-page">
            <div className="ambient-shape ambient-shape-one" />
            <div className="ambient-shape ambient-shape-two" />

            <section className="input-shell" aria-labelledby="page-title">
                <div className="intro-panel">
                    <p className="eyebrow">A tiny moment of connection</p>
                    <h1 id="page-title">Make it personal.</h1>
                    <p className="intro-copy">
                        Say hello and see your name take the spotlight.
                    </p>
                    <div className="intro-mark" aria-hidden="true">✦</div>
                </div>

                <div className="form-panel">
                    <div className="panel-header">
                        <span className="step-label">01 / 01</span>
                        <span className="status-dot">Ready</span>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">What should we call you?</label>
                        <div className="input-wrap">
                            <input
                                id="name"
                                type="text"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                                placeholder="Enter your name"
                                maxLength={40}
                                autoComplete="name"
                            />
                            <span className="character-count">{name.length}/40</span>
                        </div>

                        <div className="actions">
                            <button className="primary-button" type="submit" disabled={!name.trim()}>
                                Show my greeting <span aria-hidden="true">↗</span>
                            </button>
                            <button className="clear-button" type="button" onClick={clearName} disabled={!name && !displayName}>
                                Clear
                            </button>
                        </div>
                    </form>

                    <div className={`greeting ${hasName ? 'greeting-visible' : ''}`} aria-live="polite">
                        {hasName ? (
                            <>
                                <span className="greeting-label">Your greeting</span>
                                <h2>Hello, {displayName}.</h2>
                                <p>It’s good to have you here.</p>
                            </>
                        ) : (
                            <p className="placeholder-message">Your greeting will appear here.</p>
                        )}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default UserInput