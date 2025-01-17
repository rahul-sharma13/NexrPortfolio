"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import Leetcode from "@/components/Leetcode";

// about data
const about: {
  title: string;
  description: string;
  info: {
    fieldName: string;
    fieldValue: string;
  }[];
} = {
  title: "About me",
  description:
    "Engineering Physics major with a Computer Science minor, currently in my final year at DTU. I have a strong background in full-stack development.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Rahul Sharma",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 7404177669",
    },
    {
      fieldName: "Experience",
      fieldValue: "2 years",
    },
    {
      fieldName: "Email",
      fieldValue: "rahulharit13@gmail.com",
    },
    {
      fieldName: "College",
      fieldValue: "Delhi Technological University",
    },
    {
      fieldName: "Degree",
      fieldValue: "Bachelor of Technology(Engineering Physics)",
    },
  ],
};

// education
const education: {
  icon: string;
  title: string;
  description: string;
  items: {
    institution: string;
    duration: string;
    degree: string;
  }[];
} = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "Currently pursuing a Bachelor's degree in Engineering Physics with a minor in Computer Science at DTU. Expected graduation in 2025, with a focus on software development, data structures, and algorithms.",
  items: [
    {
      institution: "Vaish Model Sr. Sec. School",
      duration: "2017-2019",
      degree: "Class 10th",
    },
    {
      institution: "Siddhartha Public School",
      duration: "2019-2021",
      degree: "Class 12th",
    },
    {
      institution: "Delhi Techonological University",
      duration: "2021-2025",
      degree: "Bachelor Of Technology",
    },
  ],
};

// skills
const skills: {
  title: string;
  description: string;
  skillList: {
    icon: JSX.Element;
    name: string;
  }[];
} = {
  title: "My Skills",
  description:
    "My projects range from data-driven web applications to dynamic mobile solutions, with expertise in tools like React, Next.js, PostgreSQL, and MongoDB",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html5",
    },
    {
      icon: <FaCss3 />,
      name: "Css",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaNodeJs />,
      name: "NodeJs",
    },
    {
      icon: <FaReact />,
      name: "ReactJs",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <SiTailwindcss />,
      name: "TailwindCSS",
    },
    {
      icon: <SiNextdotjs />,
      name: "NextJs",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About me</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="leetcode">Leetcode</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            <TabsContent value="education">
              <div className="text-center xl:text-left flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232339] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:item-start"
                        >
                          <span className="text-portColor">
                            {item.duration}
                          </span>
                          <h3 className="text-lg max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-portColor" />
                            <p className="text-white/60 text-[16px]">
                              {item.institution}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-portColor transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 mt-3">
                  {about.info.map((info, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{info.fieldName}</span>
                        <span className="text-lg">{info.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* leetcode */}
            <TabsContent value="leetcode" className="w-full text-center xl:text-left">
              <Leetcode />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
