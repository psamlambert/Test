import Image from "next/image";
import Link from "next/link";

type Props = { onDark?: boolean; size?: number; withWordmark?: boolean; className?: string };

export default function Logo({ onDark = false, size = 22, withWordmark = true, className = "" }: Props) {
  return (
    <Link href="/" aria-label="D.A.R.T. home" className={`inline-flex items-center gap-2 ${className}`}>
      <Image
        src="/brand/dart-mark.png"
        alt=""
        width={size}
        height={Math.round(size * 0.8)}
        priority
        className={onDark ? "mark-on-dark" : ""}
        style={{ width: size, height: "auto" }}
      />
      {withWordmark && (
        <span className={`font-semibold tracking-tight ${onDark ? "text-white" : "text-ink"}`} style={{ fontSize: size * 0.7 }}>
          D.A.R.T.
        </span>
      )}
    </Link>
  );
}
