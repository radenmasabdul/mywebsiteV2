export interface WorkData {
    themeColor: string;
    id: number;
    name: string;
    description: string;
    logo: string;
    webImage: string;
    mobileImage: string;
    responsibilities: string;
  }
  
  import LogoMain from "../assets/images/favicon.ico";
  import LogoWeb from "../assets/images/esppa-web.png";
  import LogoMobile from "../assets/images/esppa-mobile.png";
  import LogoRDJWeb from "../assets/images/Logo-Web-RDJ.png";
  import LogoRDJMobile from "../assets/images/Logo-Mobile-RDJ.png";
  import LogoKBMWeb from "../assets/images/Logo-Web-KBM.png";
  import LogoKBMMobile from "../assets/images/Logo-Mobile-KBM.png";
  import LogoHealthWeb from "../assets/images/Logo-Web-Health.png";
  import LogoHealthMobile from "../assets/images/Logo-Mobile-Health.png";
  
  const workData: WorkData[] = [
    {
      id: 1,
      name: "ESPPA",
      description:
        "Developed an application supporting SPPA, Policy, Claims, Invoicing, and Payment in the SME ecosystem.",
      logo: LogoMain,
      webImage: LogoWeb,
      mobileImage: LogoMobile,
      themeColor: "rgb(0, 66, 113)",
      responsibilities:"Building new features to enhance functionality, Fixing bugs and improving system stability,Optimizing UI performance and expanding service coverage, Collaborating with backend and QA teams to meet business requirements, Using React, JavaScript, TypeScript, and Tailwind CSS."
    },
    {
      id: 2,
      name: "Ruang Data",
      description:
        "Involved in the initial development and ongoing updates of the Ruang Data Web application.",
      logo: LogoMain,
      webImage: LogoRDJWeb,
      mobileImage: LogoRDJMobile,
      themeColor: "rgb(128, 0, 128)",
      responsibilities:"Building frontend architecture and implementing responsive UI/UX, Updating and enhancing features based on business needs, Fixing bugs and improving performance,  Collaborating with backend and QA teams for seamless integration, Utilizing React, TypeScript, and Tailwind CSS."
    },
    {
      id: 3,
      name: "KBM",
      description: "Enhancing the KBM Claim Web platform.",
      logo: LogoMain,
      webImage: LogoKBMWeb,
      mobileImage: LogoKBMMobile,
      themeColor: "rgb(0, 0, 139)",
      responsibilities:"Developing and releasing new features to improve functionality,  Fixing bugs and optimizing UI performance, Refining existing features for better user experience, Collaborating with backend and QA teams for seamless integration,  Utilizing React, JavaScript, and Material UI."
    },
    {
      id: 4,
      name: "Health",
      description: "Enhancing the Health Web platform.",
      logo: LogoMain,
      webImage: LogoHealthWeb,
      mobileImage: LogoHealthMobile,
      themeColor: "rgb(173, 216, 230)",
      responsibilities:"Implementing new features and fixing bugs, Enhancing UI/UX with responsive design, Optimizing performance for a better user experience, Ensuring smooth integration with backend and QA teams, Using React, JavaScript, and Material UI."
    },
  ];
  
export default workData;
  