import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-2 grid-rows-2 gap-6 p-8 min-h-screen">
        {/* Spalte 1 */}
        <div className="bg-sky-600 p-6 rounded-lg shadow-md text-center text-3xl font-bold  italic ">
          <h2 className="text-4xl font-semibold font-extrabold underline mb-10 text-white">BMW M8 Competition Coupe</h2>

          <Image
            src="/bbmmww.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
            className="pt-10"
          />
          {/* Button hinzufügen */}
          <button className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-300 font-bold  italic">
            Mehrerfahren
          </button>
        </div>

        {/* Spalte 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md  text-indigo-800 text-1xs font-bold  italic text-left">
          <h2 className="text-5xl font-semibold font-extrabold underline mb-10">informationen</h2>
          <p className="text-base"> 
            Der BMW Tower, auch bekannt als BMW Hochhaus, ist ein ikonisches
            Gebäude und eines der bekanntesten Wahrzeichen in München,
            Deutschland. Es dient als Sitz der BMW Group und ist ein markantes
            Beispiel für moderne Architektur. Hier sind einige interessante
            Details zum BMW Tower: 1. Allgemeine Informationen Name: BMW Tower
            oder BMW Hochhaus Standort: München, Deutschland, im Stadtteil
            SchwabenQuartier (neben dem BMW Museum und dem BMW Welt) Eröffnung:
            1973 Höhe: 101 Meter (33 Stockwerke) Architektur: Entworfen von den
            Architekten Karl Schwanzer und Franz Hart (hinter der Idee stand die
            Unternehmensvision von BMW, in die Zukunft zu blicken und den
            Fortschritt zu symbolisieren).{' '}
          </p>
        </div>

        {/* Spalte 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md  text-indigo-800 text-3xl font-bold  italic  text-left ">
          <h2 className="text-4xl font-semibold font-extrabold underline mb-10">
            informationen
          </h2>
          <ul >
            <li className="py-5 underline font-bold  italic"> Motor: 4,4-Liter V8 Bi-Turbo</li>
            <li className="py-5 underline font-bold  italic">625 PS (460 kW)</li>
            <li className="py-5 underline font-bold  italic">Drehmoment: 750 Nm Beschleunigung </li>
            <li className="py-5 underline font-bold  italic">(0-100 km/h): In nur 3,1 Sekunden</li>
            <li className="py-5 underline font-bold  italic"> Höchstgeschwindigkeit: Elektronisch begrenzt auf 250 km/h, auf
              Wunsch auf 305 km/h </li>
          </ul>
        </div>

        {/* Spalte 4 */}
        <div className="bg-sky-600 p-6 rounded-lg shadow-md text-center text-3xl font-bold  italic ">
          <h2 className="text-5xl font-semibold font-extrabold underline mb-10 text-white"> Das Hauptquartier von Bmw </h2>
          <Image
            src="/bb.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
            className="pl-10"
          />

          {/* Button hinzufügen */}
          <button className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-300 font-bold  italic">
            Entdecken
          </button>
        </div>
      </div>
    </main>
  );
}
