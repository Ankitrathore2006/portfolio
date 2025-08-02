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
      <div className="b-name">
        <h2><span></span>ANKIT <span></span><span>RATHORE</span></h2>
      </div>
      <div className="flex items-center md:gap-16 gap-8">
        {footerIconsList.map((icon, index) => (
          <div
            key={index}
            className="cursor-pointer hover:-translate-y-5 transition-all duration-700"
          >
            <img
              src={icon.icon}
              alt={icon.name}
              className="md:size-10 size-8"
            />
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
