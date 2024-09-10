import Image from "next/image";
import Link from "next/link";

type Props = {
  name: string;
  times: Array<string>;
  specialties: Array<string>;
  image: string;
  alt: string;
};

export default function ProviderCard({
  name,
  times,
  specialties,
  image,
  alt,
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
      <div className="flex bg-[#ffffff]">
        <Image
          src={image}
          alt={alt}
          width={50}
          height={50}
          className="border-l rounded-l"
        />
        <div className="border-r border-t border-b rounded-r">
          <h1 className="text-xl">{name}</h1>
          <span>
            <b>Specialties:</b> {trimSpecialties(specialties)}
          </span>
        </div>
      </div>
      <div className="mb-4">
        {times.map((time, index) => (            
            <Link href={`/confirmation?name=${name}&image=${image}&date=${'Tuesday, September 10, 2024'}&time=${time}`} key={index}>
            <div>
                {time}
            </div>
            </Link>
        ))}
      </div>
    </div>
  );
}
