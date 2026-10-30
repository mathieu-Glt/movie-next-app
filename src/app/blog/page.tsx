import Image from "next/image";

async function page() {
  // Simule un appel API de 3 secondes
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <div className="flex flex-wrap">
      <Image
        src="/paris-basilique.jpg"
        width={500}
        height={500}
        className="hidden md:block m-auto"
        alt="Eiffel tower at paris"
      />
      <Image
        src="/concorde.jpg"
        width={500}
        height={500}
        className="hidden md:block m-auto"
        alt="Eiffel tower at paris"
      />
      <main className="grid grid-cols-4 gap-4 items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="col-span-2 ">
          <h1 className="text-yellow-500-500 bold text-3xl">
            Welcome on my blog
          </h1>
          <p className="overflow-hidden text-ellipsis">
            The longest word in any of the major English language dictionaries
            is pneumonoultramicroscopicsilicovolcanoconiosis, a word that refers
            to a lung disease contracted from the inhalation of very fine silica
            particles, specifically from a vo mlcano; medically, it is the same
            as silicosis.
          </p>
        </div>
        <div className="col-span-2">
          <h1 className="text-3xl font-bold underline text-blue-600-600 m">
            My history...
          </h1>
          <p className="overflow-hidden text-ellipsis">
            The longest word in any of the major English language dictionaries
            is pneumonoultramicroscopicsilicovolcanoconiosis, a word that refers
            to a lung disease contracted from the inhalation of very fine silica
            particles, specifically from a volcano; medically, it is the same as
            silicosis.
          </p>
        </div>{" "}
        <div className="col-start-1 col-end-7">
          <h1 className="text-3xl font-bold underline text-red-600 m">
            I am from...
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
export default page;
