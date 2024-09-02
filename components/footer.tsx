/* eslint-disable prettier/prettier */
import { twitterLogo } from "public/x_dark";

/* eslint-disable prettier/prettier */
export default function FooterSection() {
  return (
    <footer className="flex max-w-5xl m-auto mt-32 flex-wrap justify-between max-lg:justify-center max-lg:text-center">
        <section className="flex flex-col m-2">
           <p className="font-bold text-black m-3">Finantracks</p>
           <p className="text-black ml-3">Made with love by 
              <a className="text-opacity-30" href="https://linkedin.com/in/ediergama"> Edier Gama</a>
           </p>     
        </section>
        <section className="flex m-7 mt-10">
           <p className="ml-2 -mt-1">{twitterLogo}</p>
           <img alt="github" className="-mt-3 ml-1" height={50} src="../github-dark.png" width={50}/>
        </section>
    </footer>
  );
}
