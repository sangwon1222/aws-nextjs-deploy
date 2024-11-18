import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          aria-hidden
          src="https://d1a1zdgqqsy8ds.cloudfront.net/test-image.png"
          alt="Test image"
          width={1280}
          height={1280}
        />

        <Image
          className="dark:invert"
          src="https://d1a1zdgqqsy8ds.cloudfront.net/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <Image
          aria-hidden
          src="https://d1a1zdgqqsy8ds.cloudfront.net/file.svg"
          alt="File icon"
          width={46}
          height={46}
        />

        <Image
          aria-hidden
          src="https://d1a1zdgqqsy8ds.cloudfront.net/window.svg"
          alt="Window icon"
          width={46}
          height={46}
        />

        <Image
          aria-hidden
          src="https://d1a1zdgqqsy8ds.cloudfront.net/globe.svg"
          alt="Globe icon"
          width={46}
          height={46}
        />
      </main>
    </div>
  );
}
