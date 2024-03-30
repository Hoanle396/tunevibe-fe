import { FCC } from "@/types";
import React, { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

const Button: FCC<Props> = ({ children, className, ...props }) => {
  return (
    <div className="border-accent border-[2px] p-2 rounded-full group hover:border-accent-hover">
      <button
        {...props}
        className={`bg-accent rounded-full min-h-[36px] px-3 font-semibold text-white ring-8 ring-accent/50 group-hover:bg-accent-hover ${className}`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
