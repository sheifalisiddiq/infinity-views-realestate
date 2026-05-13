'use client'

import { useState, useMemo } from 'react'

interface MortgageCalculatorProps {
  propertyPrice: number
}

export default function MortgageCalculator({ propertyPrice }: MortgageCalculatorProps) {
  const [loanAmount, setLoanAmount] = useState(Math.round(propertyPrice * 0.6))
  const [termYears, setTermYears] = useState(25)
  const [ratePercent, setRatePercent] = useState(4.5)

  const monthly = useMemo(() => {
    const r = ratePercent / 100 / 12
    const n = termYears * 12
    if (r === 0) return loanAmount / n
    return (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
  }, [loanAmount, termYears, ratePercent])

  const totalPayment = monthly * termYears * 12
  const totalInterest = totalPayment - loanAmount

  return (
    <div>
      <div className="eyebrow text-[9px] text-text-on-dark/40 mb-6">Mortgage Estimate</div>
      <div className="border border-hairline-dark p-8 space-y-8">
        {/* Loan amount */}
        <div>
          <div className="flex justify-between mb-3">
            <label className="eyebrow text-[9px] text-text-on-dark/50">Loan Amount (AED)</label>
            <span className="eyebrow text-[9px] text-gold">
              {loanAmount.toLocaleString()}
            </span>
          </div>
          <input
            type="range"
            min={500000}
            max={propertyPrice}
            step={100000}
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            className="w-full h-px bg-hairline-dark appearance-none cursor-pointer accent-gold"
            aria-label="Loan amount"
          />
          <div className="flex justify-between mt-1">
            <span className="text-text-on-dark/25 text-[11px]">500K</span>
            <span className="text-text-on-dark/25 text-[11px]">{(propertyPrice / 1_000_000).toFixed(1)}M</span>
          </div>
        </div>

        {/* Term */}
        <div>
          <div className="flex justify-between mb-3">
            <label className="eyebrow text-[9px] text-text-on-dark/50">Term</label>
            <span className="eyebrow text-[9px] text-gold">{termYears} years</span>
          </div>
          <input
            type="range"
            min={5}
            max={30}
            step={5}
            value={termYears}
            onChange={(e) => setTermYears(Number(e.target.value))}
            className="w-full h-px bg-hairline-dark appearance-none cursor-pointer accent-gold"
            aria-label="Loan term in years"
          />
          <div className="flex justify-between mt-1">
            <span className="text-text-on-dark/25 text-[11px]">5y</span>
            <span className="text-text-on-dark/25 text-[11px]">30y</span>
          </div>
        </div>

        {/* Rate */}
        <div>
          <div className="flex justify-between mb-3">
            <label className="eyebrow text-[9px] text-text-on-dark/50">Interest Rate</label>
            <span className="eyebrow text-[9px] text-gold">{ratePercent.toFixed(1)}%</span>
          </div>
          <input
            type="range"
            min={2}
            max={10}
            step={0.1}
            value={ratePercent}
            onChange={(e) => setRatePercent(Number(e.target.value))}
            className="w-full h-px bg-hairline-dark appearance-none cursor-pointer accent-gold"
            aria-label="Interest rate percentage"
          />
          <div className="flex justify-between mt-1">
            <span className="text-text-on-dark/25 text-[11px]">2%</span>
            <span className="text-text-on-dark/25 text-[11px]">10%</span>
          </div>
        </div>

        {/* Result */}
        <div className="border-t border-hairline-dark pt-6 grid grid-cols-3 gap-4">
          <div>
            <p className="eyebrow text-[8px] text-text-on-dark/35 mb-1">Monthly</p>
            <p className="font-serif text-gold text-lg">
              {Math.round(monthly).toLocaleString()}
            </p>
            <p className="eyebrow text-[7px] text-text-on-dark/25">AED</p>
          </div>
          <div>
            <p className="eyebrow text-[8px] text-text-on-dark/35 mb-1">Total Interest</p>
            <p className="font-serif text-text-on-dark text-lg">
              {Math.round(totalInterest / 1_000_000 * 10) / 10}M
            </p>
            <p className="eyebrow text-[7px] text-text-on-dark/25">AED</p>
          </div>
          <div>
            <p className="eyebrow text-[8px] text-text-on-dark/35 mb-1">Total Payment</p>
            <p className="font-serif text-text-on-dark text-lg">
              {Math.round(totalPayment / 1_000_000 * 10) / 10}M
            </p>
            <p className="eyebrow text-[7px] text-text-on-dark/25">AED</p>
          </div>
        </div>

        <p className="eyebrow text-[7px] text-text-on-dark/20 leading-relaxed">
          Indicative only. Subject to bank approval and individual circumstances. Maximum LTV for non-residents on properties above AED 5M is typically 65%.
        </p>
      </div>
    </div>
  )
}
