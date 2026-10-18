export function SafeImg({
  src,
  alt,
  className,
  loading = "lazy",
  draggable = false,
}: {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  draggable?: boolean;
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      draggable={draggable}
      decoding="async"
    />
  );
}
