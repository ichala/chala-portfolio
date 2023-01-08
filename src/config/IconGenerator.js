import {
  SiReact, SiNodedotjs, SiRedux, SiPostgresql, SiMongodb,
  SiMysql, SiFirebase, SiAmazonaws,
  SiHeroku, SiNetlify, SiGithub, SiGitlab, SiBitbucket,
  SiJira, SiTrello, SiSlack, SiDiscord, SiZoom, SiGooglemeet, SiFigma,
  SiAdobexd, SiAdobephotoshop, SiHtml5, SiCss3, SiSass, SiBootstrap, SiTailwindcss,
  SiJavascript, SiTypescript, SiPython, SiJava, SiC, SiCplusplus, SiCsharp, SiPhp, SiRuby, SiSwift,
  SiKotlin, SiGo, SiR, SiNextdotjs, SiGit, SiRubyonrails, SiSymfony, SiAdobepremierepro,
} from 'react-icons/si';

// get the title and return the SiIcon
const IconGenerator = (IconName, size) => {
  switch (IconName) {
    case 'React':
      return <SiReact size={size} />;
    case 'NodeJs':
      return <SiNodedotjs size={size} />;
    case 'Redux':
      return <SiRedux size={size} />;
    case 'Postgres':
      return <SiPostgresql size={size} />;
    case 'MongoDB':
      return <SiMongodb size={size} />;
    case 'MySQL':
      return <SiMysql size={size} />;
    case 'Symfony':
      return <SiSymfony size={size} />;
    case 'Firebase':
      return <SiFirebase size={size} />;
    case 'AWS':
      return <SiAmazonaws size={size} />;
    case 'Heroku':
      return <SiHeroku size={size} />;
    case 'Netlify':
      return <SiNetlify size={size} />;
    case 'Github':
      return <SiGithub size={size} />;
    case 'Git':
      return <SiGit size={size} />;
    case 'Gitlab':
      return <SiGitlab size={size} />;
    case 'Bitbucket':
      return <SiBitbucket size={size} />;
    case 'Jira':
      return <SiJira size={size} />;
    case 'Trello':
      return <SiTrello size={size} />;
    case 'Slack':
      return <SiSlack size={size} />;
    case 'Discord':
      return <SiDiscord size={size} />;
    case 'Zoom':
      return <SiZoom size={size} />;
    case 'GoogleMeet':
      return <SiGooglemeet size={size} />;
    case 'Figma':
      return <SiFigma size={size} />;
    case 'AdobeXD':
      return <SiAdobexd size={size} />;
    case 'AdobePhotoshop':
      return <SiAdobephotoshop size={size} />;
    case 'AdobePremiere':
      return <SiAdobepremierepro size={size} />;
    case 'HTML':
      return <SiHtml5 size={size} />;
    case 'CSS':
      return <SiCss3 size={size} />;
    case 'SASS':
      return <SiSass size={size} />;
    case 'Bootstrap':
      return <SiBootstrap size={size} />;
    case 'TailwindCSS':
      return <SiTailwindcss size={size} />;
    case 'JavaScript':
      return <SiJavascript size={size} />;
    case 'TypeScript':
      return <SiTypescript size={size} />;
    case 'Python':
      return <SiPython size={size} />;
    case 'Java':
      return <SiJava size={size} />;
    case 'C':
      return <SiC size={size} />;
    case 'C++':
      return <SiCplusplus size={size} />;
    case 'C#':
      return <SiCsharp size={size} />;
    case 'PHP':
      return <SiPhp size={size} />;
    case 'Ruby':
      return <SiRuby size={size} />;
    case 'Ruby on Rails':
      return <SiRubyonrails size={size} />;
    case 'Swift':
      return <SiSwift size={size} />;
    case 'Kotlin':
      return <SiKotlin size={size} />;
    case 'Go':
      return <SiGo size={size} />;
    case 'R':
      return <SiR size={size} />;
    case 'NextJs':
      return <SiNextdotjs size={size} />;

    default:
      break;
  }
  return null;
};

export default IconGenerator;
