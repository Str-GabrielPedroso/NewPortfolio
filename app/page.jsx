import { FiDownload } from "react-icons/fi";

//Components
import Social from "@/components/Social";
import Photo from "@/components/Photo";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-18">

          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Web Developer</span>

            <h1 className="h1 mb-6">
              Hi, I'm <br />
              <span className="text-accent">
                Gabriel Pedroso
              </span>
            </h1>

            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant digital experiences and have diverse skills in multiple programming technologies.
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                download
                href="/Assets/Curriculo.pdf"
                size="lg"
                className="uppercase flex items-center gap-2 p-3 border border-accent bg-transparent text-accent hover:bg-accent hover:text-primary rounded-full"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="h-9 w-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;