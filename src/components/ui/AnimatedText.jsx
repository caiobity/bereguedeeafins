'use client'

export default function AnimatedText({ text, className = '', baseDelay = 0 }) {
  const words = text.split(' ')
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block animate-word-reveal"
          style={{ animationDelay: `${baseDelay + i * 70}ms` }}
        >
          {word}{i < words.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </span>
  )
}
