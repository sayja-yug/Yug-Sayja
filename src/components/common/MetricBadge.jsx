import React from 'react';

export const MetricBadge = ({ label, value, description, variant = 'accent' }) => {
  const variantStyles = {
    accent: "bg-accent-light text-accent-hover border-accent/20",
    primary: "bg-primary-light text-primary border-primary/20",
    dark: "bg-dark text-bg border-dark/20",
    neutral: "bg-bg-subtle text-dark-muted border-border",
  };

  return (
    <div className={`inline-flex flex-col px-3 py-2 rounded border font-mono text-xs ${variantStyles[variant] || variantStyles.accent}`}>
      <span className="text-[10px] uppercase tracking-wider opacity-75 font-semibold">{label}</span>
      <span className="text-sm font-bold mt-0.5">{value}</span>
      {description && (
        <span className="text-[10px] opacity-75 font-sans mt-0.5">{description}</span>
      )}
    </div>
  );
};

export default MetricBadge;
