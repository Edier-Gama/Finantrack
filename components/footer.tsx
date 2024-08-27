/* eslint-disable prettier/prettier */
export default function FooterSection() {
  return (
    <footer className="flex max-w-5xl m-auto mt-32 flex-wrap justify-between max-lg:justify-center max-lg:text-center">
        <section className="flex flex-col m-3">
           <p className="font-bold text-black m-3">Finantracks</p>
           <p className="text-black m-3">Made with love in 🇨🇴 by 
              <a href="https://linkedin.com/in/ediergama"> Edier Gama</a>
           </p>     
        </section>
        <section className="flex m-3 mt-10">
           <p className="text-black m-3">Git</p>
           <p className="text-black m-3">Twitter</p>
        </section>
    </footer>
  );
}
