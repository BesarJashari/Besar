import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
        {/* Linke Seite */}
        <div className="bg-white p-8 text-sky-800 ">
          <h1 className="text-7xl">Linke Seite</h1>
          <p className="mt-4">Hier ist die linke Seite des Splitscreens.</p>
        </div>

        {/* Rechte Seite */}
        <div className="bg-sky-950 p-8	  text-white">
          <h1 className="text-7xl">Rechte Seite</h1>
          <p className="mt-4">Hier ist die rechte Seite des Splitscreens.</p>

          <Image
            src="/bmw.jpg"
            width={800}
            height={1600}
            alt="Picture of the author"
            className="pt-10"
          />

          <Image
            src="/BMW.jpg"
            width={800}
            height={1600}
            alt="Picture of the author"
            className="pt-10"
          />


        </div>
      </div>
    </main>
  );
}
