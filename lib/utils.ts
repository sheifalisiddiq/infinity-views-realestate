import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number): string {
  if (price >= 1_000_000) {
    const m = price / 1_000_000
    return `AED ${m % 1 === 0 ? m : m.toFixed(1)}M`
  }
  return `AED ${price.toLocaleString()}`
}

export function formatNumber(n: number): string {
  return n.toLocaleString()
}
