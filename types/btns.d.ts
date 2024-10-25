export interface ButtonProps {
    children: string | React.ReactNode;
    onClick?: () => void;
    isSubmitting?: boolean;
    icon?: React.ReactNode;
}