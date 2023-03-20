import { useState } from "react";

export const Selection = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(
    null
  );

  const handleCardClick = (index: number) => {
    setSelectedCardIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return { selectedCardIndex, handleCardClick };
};
