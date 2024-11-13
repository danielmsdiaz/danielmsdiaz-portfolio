import { TypeAnimation } from 'react-type-animation';

const HeroStart = () => {
  return (
    <TypeAnimation className="ml-1 mb-2 uppercase font-bold text-primary dark:text-darkMode tracking-[2px]"
      sequence={[
        'web developer',
        1000,
        'Computer Engineering Student',
        1000,
        'Technology Enthusiast',
        1000
      ]}
      wrapper="span"
      speed={40}
      style={{ fontSize: '1rem', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};

export default HeroStart