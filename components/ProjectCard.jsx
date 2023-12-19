const ProjectCard = (props) => {
  const { name, banner, desc, tags, donations, url } = props;
  return (
    <div className="w-full flex flex-col bg-white border border-gray-200 rounded-lg shadow">
      <img
        className="rounded-t-lg h-[162px] object-cover"
        srcSet={banner}
        alt="project-banner"
      />
      <div className="p-5">
        <h5 className="mb-2 text-lg font-semibold tracking-tight">{name}</h5>
        <p className="mb-3 font-normal">{desc} </p>

        {tags.map((tag) => (
          <div className="inline-flex mr-1  items-center px-3 py-2 text-sm font-medium text-center rounded-lg hover:bg-gray-100 shadow  border   ">
            {tag}
          </div>
        ))}
      </div>
      <hr className="w-[100%] mt-auto" />
      <div className="px-5 h-[72px] flex justify-between items-center ">
        <div>
          <span className="font-bold">${donations}</span> Raised
        </div>
        <a
          href={url}
          target="_blank"
          className="rounded h-fit transition-all flex font-medium bg-[#464646] px-[2px] pb-[4px] pt-[2px] overflow-hidden hover:pb-[2px]"
        >
          <div className="bg-[var(--Peach-50)] px-5 py-1 w-full">Donate</div>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
