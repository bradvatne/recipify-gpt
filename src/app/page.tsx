import State from "@/components/State";

export default function Home() {
  return (
    <section className="flex w-full h-screen items-center flex-col max-w-[1080px] mx-auto">
      <nav className="flex text-white text-xl text-left w-full">
        Youtube Recipifier
      </nav>
      <h1 className="text-6xl text-white drop-shadow-xl font-bold  text-center my-16 ">
        Turn Any <span className="text-red-500 font-extrabold">YouTube</span>
        Video Into <br />
        An Easy To Read Recipe
      </h1>
      <State />

    </section>
  );
}
