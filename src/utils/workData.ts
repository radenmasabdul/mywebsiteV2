export interface WorkData {
  themeColor: string;
  id: number;
  nameKey: string;
  descriptionKey: string;
  responsibilitiesKey: string;
  logo: string;
  webImage: string;
  mobileImage: string;
  responsibilitiesTitle: string;
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
    nameKey: "work.esppa.name",
    descriptionKey: "work.esppa.description",
    responsibilitiesKey: "work.esppa.responsibilities",
    responsibilitiesTitle: "work.esppa.responsibilitiesTitle",
    logo: LogoMain,
    webImage: LogoWeb,
    mobileImage: LogoMobile,
    themeColor: "rgb(0, 66, 113)",
  },
  {
    id: 2,
    nameKey: "work.ruangdata.name",
    descriptionKey: "work.ruangdata.description",
    responsibilitiesKey: "work.ruangdata.responsibilities",
    responsibilitiesTitle: "work.esppa.responsibilitiesTitle",
    logo: LogoMain,
    webImage: LogoRDJWeb,
    mobileImage: LogoRDJMobile,
    themeColor: "rgb(128, 0, 128)",
  },
  {
    id: 3,
    nameKey: "work.kbm.name",
    descriptionKey: "work.kbm.description",
    responsibilitiesKey: "work.kbm.responsibilities",
    responsibilitiesTitle: "work.esppa.responsibilitiesTitle",
    logo: LogoMain,
    webImage: LogoKBMWeb,
    mobileImage: LogoKBMMobile,
    themeColor: "rgb(0, 0, 139)",
  },
  {
    id: 4,
    nameKey: "work.health.name",
    descriptionKey: "work.health.description",
    responsibilitiesKey: "work.health.responsibilities",
    responsibilitiesTitle: "work.esppa.responsibilitiesTitle",
    logo: LogoMain,
    webImage: LogoHealthWeb,
    mobileImage: LogoHealthMobile,
    themeColor: "rgb(173, 216, 230)",
  },
];

export default workData;
