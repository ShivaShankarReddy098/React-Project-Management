import Button from "./Button";
const Projectssiebar = ({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) => {
  return (
    <aside className=" w-1/3 px-8 py-16 bg-stone-900 text-stone-50  md:w-72 rounded-r-xl">
      <h2 className=" mb-8 font-bold  uppercase md;text-xl ">Your Projects</h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add project</Button>
      </div>
      <ul className=" mt-8">
        {projects.map((project) => {
          
          return (
            <li key={project.id}>
              <button
                onClick={onSelectProject}
                className=" w-full text-left px-1 py-1 rounded-md my-1 bg-stone-600 text-stone-400 hover:text-stone-200 hover:bg-stone-500"
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Projectssiebar;
