"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services: { num: string; title: string; description: string }[] = [
  {
    num: "01",
    title: "Web Development",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
  },
  {
    num: "01",
    title: "Web Development",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
  },
  {
    num: "01",
    title: "Web Development",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
  },
  {
    num: "01",
    title: "Web Development",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
  },
];

const Services = () => {
  return (
    <section>
      <div className="container mx-auto">services page</div>
    </section>
  );
};

export default Services;
