'use client'

import Link from 'next/link'
import { useState } from 'react'
import home from '@/app/images/icons/home.png'
import rocket from '@/app/images/icons/rocket.png'
import about from '@/app/images/icons/about.png'
import contact from '@/app/images/icons/contact.png'
import cv from '@/app/images/icons/cv.png'
import Image from 'next/image'

const navItems = [
  { href: '#home', label: 'Home', icon: home },
  { href: '#projects', label: 'Projects', icon: rocket },
  { href: '#about', label: 'About', icon: about },
  { href: '#contact', label: 'Contact', icon: contact },
  { href: '#cv', label: 'CV', icon: cv },
]

const BASE_GAP = 4
const HOVER_MARGIN = 8
const NEIGHBOR_MARGIN = 4

export function Sidebar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const getItemStyle = (index: number) => {
    if (hoveredIndex === null) {
      return { marginTop: BASE_GAP, marginBottom: BASE_GAP }
    }

    const distance = index - hoveredIndex
    const isHovered = distance === 0
    const isAboveNeighbor = distance === -1
    const isBelowNeighbor = distance === 1

    if (isHovered) {
      return { marginTop: BASE_GAP + HOVER_MARGIN, marginBottom: BASE_GAP + HOVER_MARGIN }
    }
    if (isAboveNeighbor) {
      return { marginTop: BASE_GAP + NEIGHBOR_MARGIN, marginBottom: BASE_GAP + HOVER_MARGIN }
    }
    if (isBelowNeighbor) {
      return { marginTop: BASE_GAP + HOVER_MARGIN, marginBottom: BASE_GAP + NEIGHBOR_MARGIN }
    }

    return { marginTop: BASE_GAP, marginBottom: BASE_GAP }
  }

  const getScale = (index: number) => {
    if (hoveredIndex === null) return ''
    const distance = Math.abs(index - hoveredIndex)
    if (distance === 0) return 'scale-125'
    if (distance === 1) return 'scale-110'
    return ''
  }

  return (
    <aside className="fixed md:left-0 md:top-0 md:h-screen md:w-24 md:flex-col bottom-0 left-0 right-0 h-20 w-full flex flex-row items-center justify-center z-50 bg-white/80 backdrop-blur-sm md:bg-transparent">
      {navItems.map((item, index) => (
        <Link
          key={item.href}
          href={item.href}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          className={`
            group flex flex-col items-center justify-center
            w-16 h-16 rounded-2xl md:origin-left
            bg-white/80 backdrop-blur-sm hover:bg-white
            shadow-sm hover:shadow-md
            transition-all duration-300 ease-in-out
            ${getScale(index)}
          `}
          style={getItemStyle(index)}
          title={item.label}
        >
          <span className={`text-2xl transition-all duration-500 ease-in-out ${hoveredIndex === index ? 'text-3xl' : ''}`}>
            <Image src={item.icon} alt={item.label} width={24} height={24} />
          </span>
        </Link>
      ))}
    </aside>
  )
}
