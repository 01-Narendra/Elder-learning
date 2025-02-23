import React from 'react';

interface ButtonProps {
  icon?: React.ReactNode;
  text: string;
  primary?: boolean;
  onClick?: () => void;
}

export function Button({ icon, text, primary, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center px-6 py-3 rounded-lg ${
        primary
          ? 'bg-blue-600 text-white hover:bg-blue-700'
          : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
      } transition-colors`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </button>
  );
}