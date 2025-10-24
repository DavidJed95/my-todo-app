import React from "react";

type ButtonProps = {
  // onClick(): React.ComponentProps<"button">["onClick"]; this is the right way to mimic onClick type
  onClick: () => Promise<void>;
  buttonType?: "primary" | "secondary";
  children: React.ReactNode;
};

const Button = ({ onClick, buttonType, children }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`h-[45px] bg-[#473a2b] hover:bg-[#322618] w-full text-white rounded-[5px] cursor-pointer ${
        buttonType === "secondary" ? "opacity-[85%]" : ""
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
