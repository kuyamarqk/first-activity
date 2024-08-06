import Cover from "@/components/cover";
import Footer from "@/components/footer";
import Profile from "@/components/profile";
import Project from "@/components/project";

export default function Home() {
  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <div className="container mx-auto px-4 py-6 bg-gradient-to-b from-slate-800 to-slate-950 rounded-lg shadow-lg">
        <section className="cover mb-4">
          <Cover />
        </section>
        <section className="profile-section mb-4 flex flex-col items-center md:items-start">
          <Profile />
        </section>
        <hr className="my-6 border-gray-700" />
        <section className="projects">
          <Project />
        </section>
        <hr className="my-6 border-gray-700" />
        <section className="Footer  mb-4 flex flex-col items-center md:items-start">
          <Footer />
        </section>
      </div>
    </div>
  );
}
