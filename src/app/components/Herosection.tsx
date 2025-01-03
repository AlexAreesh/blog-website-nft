import { ImArrowUpRight2 } from "react-icons/im"

function Herosection () {
  return (
    <section className=''>
        <h1 className="flex justify-center font-sans text-[57px] text-[#FFFFFF] font-bold wow fadeInUp animated mb-5" 
        data-wow-delay="0s"
            style={{ visibility: "visible", animationDelay: "0s", animationName: "fadeInUp"}} >
        World Of Top Works
        </h1>

        <p
        className="flex justify-center font-azeret-mono text-[#FFFFFF87] leading-relaxed text-center md:text-left md:leading-loose wow fadeInUp animated"
        data-wow-delay="0.1s"
        style={{ visibility: "visible", animationDelay: "0.1s", animationName: "fadeInUp" }}
      >
        Welcome to the world of rare digital art. Explore the best art from
        <br className="hidden md:block" />
        hand-picked digital artists out there and find the hidden gem.
      </p>

      <div className="flex items-center justify-center mt-10">
  <button className="bg-[#E2FE26] flex items-center font-bold text-black px-8 py-3.5 rounded-lg text-sm gap-x-2 hover:bg-white text-black">
    Discover More <ImArrowUpRight2 className="text-black" />
  </button>
  <button className="ml-5 bg-white flex items-center font-bold text-black px-8 py-3.5 rounded-lg text-sm gap-x-2  hover:bg-[#E2FE26] text-black">
    All Collections <ImArrowUpRight2 className="text-black" />
  </button>
</div>



    </section>



  )
}

export default Herosection

