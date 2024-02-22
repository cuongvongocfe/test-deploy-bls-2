import Image from 'next/image';
import partner1 from '../../../public/blogs/biasaigonkiengianglogo.png'
import partner2 from '../../../public/blogs/sannhilogo.png'
import partner3 from '../../../public/blogs/ungbuoulogo.png'
import partner4 from '../../../public/blogs/dakhoalogo.png'
const SkillList = [
  // "next.js",
  // "tailwind css",
  // "figma",
  // "javaScript",
  // "web design",
  // "Gatsby.js",
  // "strapi",
  // "firebase",
  // "generative AI",
  // "wireframing",
  // "SEO",
  // "framer motion",
  // "sanity",
];

const Skills = () => {
  return (
    <section className="w-full flex flex-col p-5 xs:p-10 sm:p-12 md:p-16 lg:p-20 border-b-2 border-solid border-dark dark:border-light
     text-dark dark:text-light">
      <span className="font-semibold text-lg sm:text-3xl md:text-4xl text-accent dark:text-accentDark">
        Đối Tác Của Chúng Tôi
      </span>
      <ul className="flex flex-wrap mt-8 justify-center  xs:justify-start">
        {SkillList.map((item, index) => {
          return (
            <li
              key={index}
              className="font-semibold inline-block capitalize text-base xs:text-lg sm:text-xl  md:text-2xl py-2 xs:py-3 sm:py-4 lg:py-5 px-4 xs:px-6 sm:px-8 lg:px-12 border-2 border-solid border-dark dark:border-light rounded mr-3 mb-3 xs:mr-4 xs:mb-4  md:mr-6 md:mb-6 hover:scale-105 transition-all ease duration-200 cursor-pointer dark:font-normal" 
            >
              {item}
            </li>
          );
        })}
      </ul>
      <div className='grid lg:grid-cols-6 sm:grid-cols-3 grid-cols-2 items-center  gap-8 lg:px-24 px-4 pt-5' >
      <Image className='' src={partner1} width="30px" height="30px"></Image>
      <Image className='' src={partner2} width="30px" height="30px"></Image>
      <Image className='' src={partner3} width="30px" height="30px"></Image>
      <Image className='' src={partner4} width="30px" height="30px"></Image>
      </div>
     
    </section>
  );
};

export default Skills;
