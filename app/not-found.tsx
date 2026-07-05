import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black text-center flex-col gap-6">
      <h2 className="text-4xl font-bold">Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className="px-6 py-3 border border-black rounded-full hover:bg-black hover:text-white transition-colors">
        Return Home
      </Link>
    </div>
  );
}
