import { BoundaryButton } from "./ui/boundary-button";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <BoundaryButton>
      <button {...rest}>{children}</button>
    </BoundaryButton>
  );
}
