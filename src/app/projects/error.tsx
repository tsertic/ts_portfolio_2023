"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col justify-center items-center">
      <h2>Something went wrong!</h2>
      <p>
        Try Refresh , if that doesnt help I&apos;m very sorry probably problems
        with database
      </p>
    </div>
  );
}
