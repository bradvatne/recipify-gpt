import State from "@/components/State";

export default function Home() {
  return (
    <section className="flex w-full h-screen items-center flex-col max-w-[1080px] mx-auto">
      <h1 className="text-6xl text-white drop-shadow-xl font-bold  text-center my-16 relative">
        Turn Any
        <span className="text-red-500 font-extrabold"> YouTube </span>
        Video Into An Easy To Read <span className="arrowed">Recipe</span>
      </h1>
      <State />
    </section>
  );
}
