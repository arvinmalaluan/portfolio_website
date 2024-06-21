import hero from "../assets/hero.png";
import services from "../assets/dummy-data/offered-services.json";
import skills from "../assets/dummy-data/skills.json";
import projects from "../assets/dummy-data/projects.json";

const BodyContents = () => {
  return (
    <div className="h-screen col-span-4 overflow-y-scroll no-scrollbar">
      <div className="flex flex-col h-screen overflow-hidden">
        <div className="flex-col items-end max-w-[70%] text-right mr-0 ml-auto gap-2 p-[12px] pt-8 hidden">
          <span className="px-4 py-2 text-sm rounded-lg bg-[#FFEBD8]">
            my name is Arvin Malaluan, an aspiring web designer/web developer
            from the Philippines.
          </span>

          <span className="px-4 py-2 text-sm rounded-lg bg-[#FFEBD8]">
            my goal is to design solutions that make a difference
          </span>
          <span className="px-4 py-2 text-sm rounded-lg bg-[#FFEBD8]">
            open for part-time, full-time, project-based contracts
          </span>
          <span className="px-4 py-2 text-sm rounded-lg bg-[#FFEBD8]">
            btw, hello
          </span>
        </div>

        <img
          src={hero}
          className="object-cover w-100 md:w-[75%] h-full m-auto object-fit aspect-square"
          alt=""
        />
      </div>

      <div className="p-[32px]">
        <p className="text-[32px] pl-[12px]">PROJECTS</p>

        {projects.map((item, index) => {
          return (
            <div className="mt-2 p-[12px] border-b" key={index}>
              <p className="font-medium">{item.title}</p>
              <div className="flex flex-wrap items-center gap-2 mt-1 text-sm">
                <span className="font-medium">Tags:</span>
                {item.tags.map((tag, index) => {
                  return (
                    <span key={index} className="p-1 bg-gray-100 rounded ">
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="p-[32px] pt-[50px]">
        <p className="text-[32px] pl-[12px]">ARCHIVES</p>

        <div className="mt-2 p-[12px] border-b">
          <p className="font-medium">ICONS South Luzon</p>

          <div className="flex flex-wrap items-center gap-2 mt-1 text-sm">
            <span className="font-medium">Tags:</span>
            <span className="p-1 bg-gray-100 rounded">bootstrap</span>
            <span className="p-1 bg-gray-100 rounded">jquery</span>
            <span className="p-1 bg-gray-100 rounded">firebase</span>
            <span className="p-1 bg-gray-100 rounded">express</span>
            <span className="p-1 bg-gray-100 rounded">mysql</span>
          </div>
        </div>

        <div className="mt-2 p-[12px] border-b lg:w-[90%]">
          <p className="font-medium">PESO-Lipa.Online</p>
          <div className="flex flex-wrap items-center gap-2 mt-1 text-sm">
            <span className="font-medium">Tags:</span>
            <span className="p-1 bg-gray-100 rounded">tailwind</span>
            <span className="p-1 bg-gray-100 rounded">django</span>
            <span className="p-1 bg-gray-100 rounded">websocket</span>
            <span className="p-1 bg-gray-100 rounded">postgresql</span>
            <span className="p-1 bg-gray-100 rounded">webworker</span>
            <span className="p-1 bg-gray-100 rounded">react</span>
          </div>
        </div>

        <div className="mt-2 p-[12px] border-b lg:w-[90%]">
          <p className="font-medium">PESO-Lipa.Online</p>
          <div className="flex flex-wrap items-center gap-2 mt-1 text-sm">
            <span className="font-medium">Tags:</span>
            <span className="p-1 bg-gray-100 rounded">tailwind</span>
            <span className="p-1 bg-gray-100 rounded">django</span>
            <span className="p-1 bg-gray-100 rounded">websocket</span>
            <span className="p-1 bg-gray-100 rounded">postgresql</span>
            <span className="p-1 bg-gray-100 rounded">webworker</span>
            <span className="p-1 bg-gray-100 rounded">react</span>
          </div>
        </div>
      </div>

      <div className="p-[32px] pt-[50px] lg:w-[90%]">
        <p className="text-[32px] pl-[12px]">SKILLS</p>

        {skills.map((item, index) => {
          return (
            <div key={index} className="p-[12px] border-b">
              <p>{item.title}</p>

              <div className="flex flex-wrap gap-2 mt-1 text-sm">
                {item.skills.map((skill, index) => {
                  return (
                    <span key={index} className="p-1 bg-gray-100 rounded">
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="p-[32px] pt-[50px] lg:w-[90%]">
        <p className="text-[32px] pl-[12px]">OFFERED SERVICES</p>

        <div className="pl-[12px] grid grid-cols-2 pt-2 text-center">
          {services.map((item, index) => {
            return (
              <div
                key={index}
                className="col-span-2 p-12 bg-gray-200 md:col-span-1"
              >
                <p className="text-2xl">{item.title}</p>
                <p className="text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="p-[32px] pt-[50px] lg:w-[90%]">
        <p className="text-[32px] pl-[12px]">ABOUT</p>

        <div className="pl-[12px]">
          <p className="mt-2 mb-1 font-medium">About me</p>
          <p className="text-justify">
            Hello! I'm Arvin Malaluan, a passionate web developer based in
            Batangas City, Batangas. With a strong foundation in both frontend
            and backend development, I am dedicated to creating efficient and
            innovative solutions for various web applications.
          </p>

          <p className="pt-6 mb-1 font-medium">Professional Background</p>
          <p className="text-justify">
            I am currently pursuing a Bachelor of Science in Information
            Technology at Batangas State University, where I have maintained a
            strong academic record with a GWA of 1.46 and am a candidate for
            Latin Honors. My experience includes a recent role as a Web
            Developer at the Center for Technopreneurship and Innovation, where
            I planned and developed platforms to facilitate interactions between
            startups and entrepreneurs.
          </p>

          <p className="pt-6 mb-1 font-medium">Education</p>
          <p className="text-justify">Tertiary Education</p>
          <p className="text-justify">Batangas State University</p>
          <p className="text-justify">
            Bachelor of Science in Information Technology
          </p>
          <p className="mb-4 text-justify">Candidate for Latin Honors</p>

          <p className="text-justify ">Secondary Education</p>
          <p className="text-justify ">University of Batangas</p>
          <p className="mb-4 text-justify">Graduated with honors</p>

          <p className="text-justify">Primary Education</p>
          <p className="text-justify">Simlong Elementary School</p>
          <p className="mb-4 text-justify">
            Graduated as the class valedictorian
          </p>

          <button className="px-4 py-2 mt-4 bg-gray-100">Download CV</button>
        </div>
      </div>
    </div>
  );
};

export default BodyContents;
