import { cva, VariantProps } from "class-variance-authority";
import { PropsWithChildren } from "react";
import { Text, TextIntent, TextSize } from "../Text/Text";

export enum ButtonIntent {
  Primary = "primary",
  Secondary = "secondary",
  DeepBlue = "deep-blue",
  NeonOrange = "neon-orange",
  NeonGreen = "neon-green",
}

export enum ButtonSize {
  Sm = "sm",
  Lg = "lg",
}

const buttonStyles = cva(
  "border-[1px] border-solid inline-flex items-center justify-center",
  {
    variants: {
      intent: {
        [ButtonIntent.Primary]: "border-none bg-brand text-white",
        [ButtonIntent.Secondary]: "bg-white border-black",
        [ButtonIntent.NeonOrange]: "bg-orange-neon border-black",
        [ButtonIntent.NeonGreen]: "bg-green-neon border-black",
        [ButtonIntent.DeepBlue]: "bg-white border-deep-blue text-deep-blue",
      },
      size: {
        [ButtonSize.Sm]: "px-3 py-1 rounded-md",
        [ButtonSize.Lg]: "px-6 py-1.5 rounded-lg",
      },
      round: {
        true: "!rounded-full",
      },
    },
    defaultVariants: {
      intent: ButtonIntent.Primary,
      round: false,
      size: ButtonSize.Sm,
    },
  }
);

export interface ButtonProps
  extends PropsWithChildren,
    VariantProps<typeof buttonStyles> {
  onClick?: () => void;
  children: string;
}

const buttonSizeToTextSize = {
  [ButtonSize.Sm]: TextSize.Md,
  [ButtonSize.Lg]: TextSize.Lg,
};

const buttonIntentToTextIntent = {
  [ButtonIntent.Primary]: TextIntent.White,
  [ButtonIntent.Secondary]: TextIntent.Black,
  [ButtonIntent.NeonOrange]: TextIntent.Black,
  [ButtonIntent.NeonGreen]: TextIntent.Black,
  [ButtonIntent.DeepBlue]: TextIntent.DeepBlue,
};

export const Button = ({
  intent,
  onClick,
  children,
  round,
  size,
}: ButtonProps) => {
  return (
    <button onClick={onClick} className={buttonStyles({ intent, round, size })}>
      <Text
        intent={buttonIntentToTextIntent[intent as ButtonIntent]}
        size={buttonSizeToTextSize[size as ButtonSize]}
      >
        {children}
      </Text>
    </button>
  );
};
