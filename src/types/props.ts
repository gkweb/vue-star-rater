export interface PropColours {
  activeColour: string;
  hoverColour: string;
  inactiveColour: string;
}

export interface HandleRateProps {
  amount: number;
  currentValue: number;
}

export interface Props {
  modelValue?: number;
  maxAmount?: number;
  oneRatingOnly: boolean;
  colours: PropColours;
}
