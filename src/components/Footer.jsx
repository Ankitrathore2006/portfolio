import { footerIconsList } from "../constants";

const Footer = () => {
  return (
    <div className="w-full flex-center flex-col  gap-7 bg-black-300  py-10">
      <div className="w-[95%] "><hr /></div>
       <div>
        <img
          src="/images/logo.png"
          alt="logo"
          className="h-20 object-cover object-center"
        />
      </div>
      <div className="b-name w-full text-center">
        <h2><span></span>ANKIT <span></span><span>RATHORE</span></h2>
      </div>
      <div className="flex items-center md:gap-16 gap-8">
        {footerIconsList.map((icon, index) => (
          <div
            key={index}
            className=" hover:-translate-y-2 transition-all duration-700"
          >
            <a href={icon.href} target="_blank" rel="noopener noreferrer">
              <img
                src={icon.icon}
                alt={icon.name}
                className="md:size-10 size-8"
              />
            </a>
          </div>
        ))}
      </div>
      <p className="font-regular md:text-lg text-sm">
        {new Date().getFullYear()} © All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
