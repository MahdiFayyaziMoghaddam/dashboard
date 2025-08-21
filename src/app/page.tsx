import Content from "@/components/organisms/Content";
import Header from "@/components/organisms/Header";
import Sidebar from "@/components/organisms/Sidebar";

export default async function Home() {
  return (
    <>
      <Sidebar />
      <main className="relative flex flex-col items-stretch grow overflow-auto">
        <Header />
        <Content />
      </main>
    </>
  );
}
