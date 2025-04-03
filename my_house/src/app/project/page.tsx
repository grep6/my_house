import Image from "next/image";

const projects = [
  {
    title: "Project 1",
    description: "Description of project 1",
    image: "/images/IDJDP2.png",
  },
  {
    title: "Project 2",
    description: "Description of project 2",
    image: "/images/catal_fp_pic3.gif",
  },
  // Ajoutez d'autres projets ici
];

export default function Page() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">My Recent Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="rounded-lg p-4 shadow-md">
            <Image
              src={project.image}
              alt={project.title}
              width={300}
              height={200}
              className="rounded-md"
            />
            <h2 className="text-xl font-semibold mt-2">{project.title}</h2>
            <p className="text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}