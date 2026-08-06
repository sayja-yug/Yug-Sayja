import React from 'react';

export const SectionHeading = ({ eyebrow, title, description, align = 'left', className = '' }) => {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col ${alignment} ${className}`}>
      {eyebrow && (
        <span className="text-xs font-mono font-semibold tracking-wider text-accent uppercase mb-2">
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl font-heading font-bold text-dark tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-2 text-dark-muted text-sm sm:text-base max-w-2xl font-sans leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
