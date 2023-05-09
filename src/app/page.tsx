import State from "@/components/State";

export default function Home() {
  return (
    <section className="flex w-full h-full  items-center flex-col container mx-auto">
      <h1 className="text-6xl text-white drop-shadow-xl font-bold  text-center my-16 ">
        Turn Any <span className="text-red-500 font-extrabold">YouTube</span>
        Video Into <br />
        An Easy To Read Recipe
      </h1>
      <State />
    </section>
  );
}
