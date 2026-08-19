import React from 'react';

const AnimatedHeroText = ({ text, as: Tag = 'span', startDelay = 0, wordDelay = 0.09, className }) => (
  <Tag className={className}>
    {text.split(' ').map((word, i) => (
      <span key={i} className="hero-word" style={{ animationDelay: `${startDelay + i * wordDelay}s` }}>{word}</span>
    ))}
  </Tag>
);

export default AnimatedHeroText;
