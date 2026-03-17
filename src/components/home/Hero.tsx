import Image from "next/image";

export const Hero = () => {
    return  (
        <section className="relative w-full h-40 bg-white ">
          <div className="relative h-full z-10 flex items-end">
                 <h2 className="font-bold text-black m-2">
                    Construimos tus posibilidades...
                </h2>
          </div>
            <Image src="/resourses/images/hero-image.jpg"
                   alt="Hero image"
                   className="w-full object-cover "
                   fill
                   priority>

            </Image>
            
        </section>
    )
}