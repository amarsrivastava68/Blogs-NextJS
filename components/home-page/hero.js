import Image from "next/image";

const Hero = () => {
  return (
    <section className="text-center bg-gradient-to-b from-gray-900 to-gray-800 py-8">
      <div className="w-72 h-72 rounded-full overflow-hidden bg-gray-700 shadow-md mx-auto">
        <Image
          src="/images/site/amar.jpg"
          alt="image showing amar"
          width={300}
          height={300}
          className="object-cover object-top"
        />
      </div>
      <h1 className="text-3xl font-bold my-4 text-gray-300">Hi I am Amar</h1>
      <p className="text-lg text-gray-200 w-11/12 md:max-w-xl mx-auto">
        I am a Full Stack Next Js developer and I love to blog about different
        technologies . On this website you can check some awesome blogs about
        different tech stacks .
      </p>
    </section>
  );
};

export default Hero;
