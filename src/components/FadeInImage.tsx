"use client";

import NextImage, { type ImageProps } from "next/image";
import { useReducedMotion } from "motion/react";
import { useCallback, useState } from "react";

export default function FadeInImage({
  className,
  onLoad,
  style,
  ...props
}: ImageProps) {
  const reduce = useReducedMotion();
  const [loaded, setLoaded] = useState(false);

  const markLoaded = useCallback(() => {
    setLoaded(true);
  }, []);

  const handleLoad = useCallback(
    (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
      markLoaded();
      onLoad?.(event);
    },
    [markLoaded, onLoad]
  );

  const handleRef = useCallback(
    (node: HTMLImageElement | null) => {
      if (node?.complete && node.naturalWidth > 0) {
        markLoaded();
      }
    },
    [markLoaded]
  );

  const fadeClass = loaded ? "opacity-100" : "opacity-0";
  const transitionClass = reduce
    ? ""
    : "transition-opacity duration-500 ease-out";

  return (
    <NextImage
      {...props}
      ref={handleRef}
      className={[transitionClass, fadeClass, className].filter(Boolean).join(" ")}
      style={style}
      onLoad={handleLoad}
    />
  );
}
