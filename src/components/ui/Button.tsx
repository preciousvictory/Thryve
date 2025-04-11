import React from 'react';
import Link from 'next/link';
import { ButtonProps } from '@/types/components';
import { cn } from '@/lib/utils';

const AnimatedButton: React.FC<ButtonProps> = ({
  children,
  to,
  onClick,
  variant = 'primary',
  size = 'default',
  className = '',
  isExternal = false,
  icon,
  iconPosition = 'left',
  disabled = false,
}) => {
  const sizeClasses = {
    default: "h-10 px-4 py-2 rounded-md",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
  } as const;

  const variantClasses = {
    primary: 'bg-[var(--primary)] text-white hover:bg-[var(--primary)]/50 ',
    secondary: 'bg-[var(--secondary)] text-white  hover:bg-[var(--secondary)]/50',
    complement: 'bg-[var(--complement)] text-white  hover:bg-[var(--complement]/50',
    success: 'bg-[var(--success)] text-white  hover:bg-[var(--success)]/50',
    white: 'bg-white text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white ',
    gradient: 'bg-gradient-to-r from-[var(--primary2)] to-[var(--complement2)] via-[#4E61CA] via-60% text-white hover:bg-gradient-to-l',
    outlinePrimary: "border border-[var(--primary-light)] text-[var(--primary)] bg-white hover:bg-[var(--primary)]/70 hover:text-white",
    outlineComplement: "border border-[var(--complement)] text-[var(--outlineComplement)] bg-white hover:bg-[var(--complement)]/70 hover:text-white",
    outlineSecondary: "border border-[var(--secondary)] text-[var(--secondary)] bg-white hover:bg-[var(--secondary)]/70 hover:text-white",
    outlineSuccess: "border border-[var(--success)] text-[var(--success)] bg-white hover:bg-[var(--success)]/70 hover:text-white",
    noOutlinePrimary: "text-[var(--primary)] hover:text-[var(--primary)]/60 hover:underline font-semibold",
    noOutlineSecondary: "text-[var(--secondary)] hover:text-[var(--secondary)]/60 hover:underline font-semibold",
  } as const;

  const baseClasses = ` px-4 py-3 cursor-pointer inline-flex text-center items-center justify-center whitespace-nowrap rounded-full text-sm font-regular ring-offset-white transition-colors 
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''} `; 

  const buttonClass = cn(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  const content = (
    <div className='flex items-center flex-row text-center justify-center'>
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </div>
  );

  if (to) {
    if (isExternal) {
      return (
        <a href={to} target="_blank" rel="noopener noreferrer" className={buttonClass}>
          {content}
        </a>
      );
    }

    return (
      <Link href={to} className={buttonClass}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} disabled={disabled} className={buttonClass}>
      {content}
    </button>
  );
};

export default AnimatedButton;