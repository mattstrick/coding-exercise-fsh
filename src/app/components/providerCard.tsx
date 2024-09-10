import Image from "next/image";
import Link from "next/link";

type Props = {
  name: string;
  times: Array<string>;
  specialties: Array<string>;
  image: string;
  alt: string;
  date: string;
};

export default function ProviderCard({
  name,
  times,
  specialties,
  image,
  alt,
  date,
}: Props) {
    
    // TODO: Trim after a certain length
    const trimSpecialties = (allSpecialties: Array<string>) => {
        return (
            <>
            {allSpecialties}...
            </>
        )
    }

  return (
    <div>
      <div className="flex bg-[#ffffff] mb-2">
        <Image
          src={image}
          alt={alt}
          width={100}
          height={100}
          className="border-l rounded-l"
        />
        <div className="border-r border-t border-b rounded-r p-4">
          <h1 className="text-xl">{name}</h1>
          <span>
            <b>Specialties:</b> {trimSpecialties(specialties)}
          </span>
        </div>
      </div>
      <div className="mb-4">
        {times.map((time, index) => (            
            <Link href={`/confirmation?name=${name}&image=${image}&date=${date}&time=${time}`} key={index}>
            <div className="rounded-lg border-cyan-500 border-2 mr-2 inline-block">
                {time}
            </div>
            </Link>
        ))}
      </div>
    </div>
  );
}
