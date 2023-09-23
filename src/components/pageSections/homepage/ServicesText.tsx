"use client";
import { LETTERS } from "@/constants";
import { shuffleWord } from "@/lib";
import React, { useEffect, useState } from "react";

export const ServicesText = () => {
  const servicesArray = ["websites", "web_applications", "REST_services"];
  const [word, setWord] = useState(servicesArray[0]);
  const [wordToRender, setWordToRender] = useState(0);
  //shuffle letters logic
  useEffect(() => {
    let itteration = 0;
    const newWord = servicesArray[wordToRender];
    const wordInterval = setInterval(() => {
      const shuffledWord = shuffleWord(newWord, itteration, LETTERS);

      if (itteration > newWord.length) {
        clearInterval(wordInterval);
      }

      itteration += 1 / 3;
      setWord(shuffledWord);
    }, 20);
  }, [wordToRender]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (wordToRender >= servicesArray.length - 1) {
        setWordToRender(0);
      } else {
        setWordToRender(wordToRender + 1);
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [wordToRender]);

  const onMouseOverHandler = () => {};
  return (
    <span className="uppercase" onMouseOver={onMouseOverHandler}>
      {word}
    </span>
  );
};
