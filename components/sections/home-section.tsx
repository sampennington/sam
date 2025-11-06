'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

export function HomeSection() {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  const images = [
    { src: '/images/cave1.JPG', rotation: -8, x: '2%', y: '20%', description: 'Cave diving in Mexico', tooltipSide: 'right' },
    { src: '/images/cave2.JPG', rotation: 5, x: '75%', y: '15%', description: 'Exploring underwater caves', tooltipSide: 'left' },
    { src: '/images/cyf.jpg', rotation: -3, x: '15%', y: '73%', description: 'My Code Your Future class', tooltipSide: 'right' },
    { src: '/images/me.png', rotation: 8, x: '70%', y: '65%', description: 'Just me till i find something more interesting', tooltipSide: 'left' },
    { src: '/images/cyf-veed.jpeg', rotation: -6, x: '45%', y: '8%', description: 'Hosting Code Your Future at VEED', tooltipSide: 'right' },
    { src: '/images/cozumel.jpeg', rotation: 4, x: '40%', y: '60%', description: 'Diving in Cozumel', tooltipSide: 'right' },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const wave = {
    rest: { rotate: 0 },
    wave: {
      rotate: [0, 14, -8, 14, -4, 10, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatDelay: 1,
      },
    },
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center px-8 md:px-16 lg:px-32 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Collage Images */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        {images.map((image, index) => {
          const springConfig = { damping: 15, stiffness: 150 }
          const x = useSpring(useTransform(mouseX, [0, 1000], [0, hoveredImage === index ? 15 : 5]), springConfig)
          const y = useSpring(useTransform(mouseY, [0, 1000], [0, hoveredImage === index ? 15 : 5]), springConfig)

          return (
            <motion.div
              key={index}
              className="absolute pointer-events-auto cursor-pointer"
              style={{
                left: image.x,
                top: image.y,
                x,
                y,
              }}
              initial={{ opacity: 0, scale: 0.8, rotate: image.rotation }}
              animate={{
                opacity: 0.6,
                scale: hoveredImage === index ? 1.2 : 1,
                rotate: hoveredImage === index ? image.rotation + 5 : image.rotation,
              }}
              whileHover={{
                opacity: 0.95,
                scale: 1.2,
                rotate: image.rotation + 5,
              }}
              transition={{
                opacity: { duration: 0.3 },
                scale: { type: 'spring', stiffness: 300, damping: 20 },
                rotate: { type: 'spring', stiffness: 300, damping: 20 },
              }}
              onHoverStart={() => setHoveredImage(index)}
              onHoverEnd={() => setHoveredImage(null)}
            >
              <Image
                src={image.src}
                alt={`Gallery image ${index + 1}`}
                width={200}
                height={200}
                className="rounded-lg shadow-xl object-cover"
                style={{
                  width: '200px',
                  height: '200px',
                }}
              />
            </motion.div>
          )
        })}
      </div>

      {/* Tooltips - rendered separately to ensure they're always on top */}
      <div className="absolute inset-0 pointer-events-none hidden md:block" style={{ zIndex: 100 }}>
        {hoveredImage !== null && (
          <motion.div
            initial={{ opacity: 0, x: images[hoveredImage].tooltipSide === 'left' ? 10 : -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute bg-white px-4 py-2 rounded-lg shadow-xl whitespace-nowrap pointer-events-none"
            style={{
              backgroundColor: '#ffffff',
              left: images[hoveredImage].tooltipSide === 'left'
                ? `calc(${images[hoveredImage].x} - 200px)`
                : `calc(${images[hoveredImage].x} + 200px + 16px)`,
              top: `calc(${images[hoveredImage].y} + 100px)`,
              // transform: images[hoveredImage].tooltipSide === 'left'
              //   ? 'translate(-10%, 0%)'
              //   : 'translate(0, -50%)',
            }}
          >
            <p className="text-sm font-medium text-gray-800">{images[hoveredImage].description}</p>
          </motion.div>
        )}
      </div>

      <motion.div
        className="max-w-5xl w-full relative z-10"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          variants={item}
          className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight mb-8"
        >
          Hey!<br className="md:hidden" /> I'm Sam{' '}
          <motion.span
            className="inline-block origin-[70%_70%]"
            initial="rest"
            animate="wave"
            variants={wave}
          >
            👋
          </motion.span>
        </motion.h1>
        <motion.p
          variants={item}
          className="text-xl md:text-2xl text-gray-700 max-w-2xl mt-12"
        >
          Software Engineer, Manager, Scuba Diver
        </motion.p>
        <motion.p
          variants={item}
          className="text-xl md:text-2xl text-gray-700 max-w-2xl mt-12"
        >
          This page is about me, what i'm proud of, and what i'm working on.
        </motion.p>
        <motion.button
          variants={item}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="mt-8 px-8 py-4 bg-accent text-white rounded-full font-medium transition-colors cursor-pointer"
        >
          Get in touch
        </motion.button>
      </motion.div>
    </section>
  )
}
