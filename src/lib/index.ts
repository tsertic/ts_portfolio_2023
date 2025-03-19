export const shuffleWord = (
  word: string,
  itteration: number,
  lettersArray: string[]
): string => {
  return word
    .split("")
    .map((word, index) => {
      if (index < itteration) {
        return word;
      } else {
        let numberInArray = Math.floor(Math.random() * lettersArray.length);
        return lettersArray[numberInArray];
      }
    })
    .join("");
};

export function isVideoFile(filename: string) {
  const videoExtensions = [
    ".mp4",
    ".avi",
    ".mov",
    ".mkv",
    ".webm",
    ".flv",
    ".wmv",
  ];
  return videoExtensions.some((ext) => filename.toLowerCase().endsWith(ext));
}

export function isImageFile(filename: string) {
  const imageExtensions = [
    ".jpg",
    ".jpeg",
    ".png",
    ".gif",
    ".bmp",
    ".webp",
    ".svg",
  ];
  return imageExtensions.some((ext) => filename.toLowerCase().endsWith(ext));
}
