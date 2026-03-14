"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type AvatarContextValue = {
  imageLoaded: boolean;
  imageFailed: boolean;
  setImageLoaded: (v: boolean) => void;
  setImageFailed: (v: boolean) => void;
};

const AvatarContext = React.createContext<AvatarContextValue | null>(null);

const Avatar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const [imageFailed, setImageFailed] = React.useState(false);

  return (
    <AvatarContext.Provider
      value={{
        imageLoaded,
        imageFailed,
        setImageLoaded,
        setImageFailed,
      }}
    >
      <div
        ref={ref}
        className={cn(
          "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
          className
        )}
        {...props}
      />
    </AvatarContext.Provider>
  );
});
Avatar.displayName = "Avatar";

const AvatarImage = React.forwardRef<
  HTMLImageElement,
  React.ImgHTMLAttributes<HTMLImageElement>
>(({ className, src, alt, onLoad, onError, ...props }, ref) => {
  const ctx = React.useContext(AvatarContext);

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    ctx?.setImageLoaded(true);
    onLoad?.(e);
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    ctx?.setImageFailed(true);
    onError?.(e);
  };

  if (!src) return null;

  return (
    <img
      ref={ref}
      src={src}
      alt={alt ?? ""}
      className={cn("aspect-square h-full w-full object-cover", className)}
      onLoad={handleLoad}
      onError={handleError}
      {...props}
    />
  );
});
AvatarImage.displayName = "AvatarImage";

const AvatarFallback = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  const ctx = React.useContext(AvatarContext);
  const showFallback = !ctx || !ctx.imageLoaded || ctx.imageFailed;

  if (!showFallback) return null;

  return (
    <span
      ref={ref}
      className={cn(
        "flex h-full w-full items-center justify-center rounded-full bg-muted text-sm font-medium",
        className
      )}
      {...props}
    />
  );
});
AvatarFallback.displayName = "AvatarFallback";

export { Avatar, AvatarImage, AvatarFallback };
