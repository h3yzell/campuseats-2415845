import { useState, useEffect } from 'react'

function todayAt(time) {
    const [h, m] = time.split(':').map(Number)
    const end = new Date()
    end.setHours(h, m, 0, 0)
    return end
}

function formatTime(ms) {
    const total = Math.floor(ms / 1000)
    const h = String(Math.floor(total / 3600)).padStart(2, '0')
    const m = String(Math.floor((total % 3600) / 60)).padStart(2, '0')
    const s = String(total % 60).padStart(2, '0')
    return `${h}:${m}:${s}`
}

function SpecialBanner({ item, onAdd }) {
    const [now, setNow] = useState(() => Date.now())

    useEffect(() => {
        const id = setInterval(() => setNow(Date.now()), 1000)
        return () => clearInterval(id)
    }, [])

    const msLeft = todayAt(item.specialEndsAt) - now 
    const ended = msLeft <= 0

    return (
        <div className="card special-banner">
            <p className="tag">Today's special</p>
            <h3>{item.name}</h3>
            <p className="price">RM {item.price.toFixed(2)}</p>
            <p className="muted">
                {ended ? 'This special has ended for today.' : `Ends in ${formatTime(msLeft)}`}
            </p>
            <button className="btn" disabled={ended || item.available === false} onClick={() => onAdd(item)}>
                {ended ? 'Ended' : 'Add to cart'}
            </button>
        </div>
    )
}

export default SpecialBanner
