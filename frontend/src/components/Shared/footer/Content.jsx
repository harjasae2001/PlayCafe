import { useEffect, useState } from 'react';
import Logo from '../../../assets/Logo/playcafe.png';
import googleImage from '../../../assets/img/google.png';
import { FaFacebook, FaInstagram, FaTiktok, FaGithub } from 'react-icons/fa';
import Google from './Google';
import { Link } from 'react-router-dom';

export default function Content() {
  return (
    <div className="bg-black pt-16 py-8 px-12 h-full w-full flex flex-col justify-between md:pt-24`">
      <Nav />
      <Section2 />
    </div>
  );
}

const Section2 = () => {
  const [isWide, setIsWide] = useState(null);

  useEffect(() => {
    const handleResize = () => setIsWide(window.innerWidth > 640);
    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isWide === null) return null;

  return (
    <>
      {!isWide && (
        <div className="flex justify-center">
          <img
            className="w-24 bg-transparent p-0 rounded-3xl h-24"
            alt="logo"
            src={Logo}
            loading="lazy"
          />
        </div>
      )}
      <div
        className={`flex ${
          isWide ? 'justify-between items-end' : 'flex-col items-center'
        } text-white`}
      >
        <h1
          className={`${isWide ? 'text-[9vw]' : 'text-[12vw]'} leading-[0.8]`}
        >
          BoardGame {!isWide && <br />}
        </h1>
        <h1
          className={`${isWide ? 'text-[9vw]' : 'text-[12vw]'} leading-[0.8]`}
        >
          Cafe
        </h1>
        <p className={isWide ? '' : 'mt-8'}>©2024 by Sip & Play</p>
      </div>
    </>
  );
};

const Nav = () => {
  const navLinks = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Events',
      link: '/events',
    },
    {
      name: 'Reservation',
      link: '/reservation',
    },
    {
      name: 'Boardgame',
      link: '/boardgame',
    },
    {
      name: 'About',
      link: '/about',
    },
    {
      name: 'Help and Support',
      link: '/help',
    },
  ];
  const socialLink = [
    {
      name: 'Facebook',
      link: 'https://www.facebook.com/sipnplaynyc/',
      icon: <FaFacebook />,
    },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/sipnplaynyc/?hl=en',
      icon: <FaInstagram />,
    },
    {
      name: 'Tiktok',
      link: 'https://www.tiktok.com/@sipnplaynycofficial?lang=en',
      icon: <FaTiktok />,
    },
    {
      name: 'GitHub',
      link: 'https://github.com/RamakrushnaBiswal/PlayCafe',
      icon: <FaGithub />,
    },
  ];
  const emailAddress = 'sipnplaynyc@gmail.com';

  return (
    <div className="flex md:flex-row flex-col shrink-0 gap-4 sm:gap-20">
      <div className="flex justify-between md:gap-20">
        <div className="flex flex-col gap-2 text-gray-400">
          <h3 className="mb-2 uppercase text-white">About</h3>
          {navLinks.map((item, index) => (
            <Link
              className="hover:text-white duration-300"
              key={index}
              to={item.link}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-2 text-gray-400">
          <h3 className="mb-2 uppercase text-white">Socials</h3>
          {socialLink.map((item, index) => (
            <a
              target="_blank"
              className="hover:text-white duration-300 flex items-center gap-2"
              key={index}
              href={item.link}
              aria-label={`${item.name} - opens in a new tab`}
            >
              {item.icon}
              {item.name}
            </a>
          ))}
        </div>
      </div>
      <div className="flex flex-col text-gray-400">
        <h3 className="mb-2 uppercase text-white">Contact Us</h3>
        <a
          href={`mailto:${emailAddress}`}
          className="block mb-2 hover:underline"
        >
          {emailAddress}
        </a>
        <a href="tel:+17189711684" className="mb-2 hover:underline">
          718-971-1684
        </a>

        {/* <div className="flex items-center justify-center mt-4">
          <img
            src={googleImage}
            alt="Google Translate"
            className="w-[2rem] h-[2rem] mr-[65px]"
          />
        </div> */}
        <Google />
      </div>
    </div>
  );
};
