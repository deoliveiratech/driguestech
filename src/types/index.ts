import common from "../../public/locales/en-US/common.json";
import commonPtBr from "../../public/locales/pt-BR/common.json";
import commonEsEs from "../../public/locales/es-Es/common.json";

export interface ITechs {
  icon: JSX.Element;
  color: string;
}

export interface IProjects {
  title: string;
  image: string;
  description: string;
  link: string;
}

export interface Resources {
  common: typeof common;
  commonPtBr: typeof commonPtBr;
  commonEsEs: typeof commonEsEs;
  // as many as files you have
}
