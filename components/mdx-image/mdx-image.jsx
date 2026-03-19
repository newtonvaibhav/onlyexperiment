import Image from "next/image";

const BLUR_EXTENSIONS = new Set(["jpg", "jpeg", "png", "webp", "avif"]);

function getExtension(src) {
  if (!src) return null;

  if (typeof src === "string") {
    const cleanSrc = src.split("?")[0];
    const parts = cleanSrc.split(".");
    return parts.length > 1 ? parts.pop().toLowerCase() : null;
  }

  if (typeof src === "object" && typeof src.src === "string") {
    const cleanSrc = src.src.split("?")[0];
    const parts = cleanSrc.split(".");
    return parts.length > 1 ? parts.pop().toLowerCase() : null;
  }

  return null;
}

export function MDXImage({
  src,
  alt,
  placeholder,
  blurDataURL,
  sizes = "(max-width: 672px) 100vw, 624px",
  width,
  height,
  title,
  className,
  style,
  ...props
}) {
  // const extension = getExtension(src);
  // const supportsAutoBlur = extension ? BLUR_EXTENSIONS.has(extension) : false;
  // const resolvedPlaceholder =
  //   placeholder === "blur" && (supportsAutoBlur || blurDataURL)
  //     ? "blur"
  //     : "empty";
  // const hasExplicitDimensions = Boolean(width) && Boolean(height);
  // const isStaticImport = typeof src === "object" && src !== null;

  if (!isStaticImport && !hasExplicitDimensions) {
    return (
      <img
        src={src}
        alt={alt}
        title={title}
        className={className}
        style={{ width: "100%", height: "auto", ...style }}
        {...props}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      className={className}
      placeholder="blur"
      style={{ width: "100%", height: "auto", ...style }}
      {...props}
    />
  );
}
