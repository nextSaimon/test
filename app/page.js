import Image from "next/image";
export default function Home() {
  return (
    <div className=" m-8">
      <Image src="/physics/1/1/2.jpg" alt="d" width={500} height={500} />
      <h1>Hello World</h1>
      <p>This is a test</p>
      <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 ">Click me</button>
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 border-2 border-gray-500 rounded-full animate-spin border-t-transparent"></div>
        Loading...
      </div>
   
    </div>
  );
}
