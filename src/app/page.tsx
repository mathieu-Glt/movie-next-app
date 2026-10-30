import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-between bg-zinc-50 font-sans dark:bg-black">
      <Image
        src="/paris.jpg"
        width={1000}
        height={500}
        className="hidden md:block"
        alt="Eiffel tower at paris"
      />
      <main className="flex flex-row  w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="basis-1/3 mr-7">
          <h1 className="text-blue-500 bold text-3xl">Hello World !</h1>
          <p className="overflow-hidden text-ellipsis">
            The longest word in any of the major English language dictionaries
            is pneumonoultramicroscopicsilicovolcanoconiosis, a word that refers
            to a lung disease contracted from the inhalation of very fine silica
            particles, specifically from a vo mlcano; medically, it is the same
            as silicosis.
          </p>
        </div>
        <div className="basis-2/3">
          <h1 className="text-3xl font-bold underline text-red-600 m">
            Hello World !
          </h1>
          <p className="overflow-hidden text-ellipsis">
            The longest word in any of the major English language dictionaries
            is pneumonoultramicroscopicsilicovolcanoconiosis, a word that refers
            to a lung disease contracted from the inhalation of very fine silica
            particles, specifically from a volcano; medically, it is the same as
            silicosis.
          </p>
        </div>
      </main>
    </div>
  );
}
