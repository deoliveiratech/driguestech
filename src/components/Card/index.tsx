import { useProjectsContext } from "hooks/useProjectsContext";
import { useTranslation } from "next-i18next";

import { IProjects } from "types";

import { Button } from "../Button";
import * as S from "./style";

import portfolioItaquicell from "/public/assets/itaquicell-site.png";
import portfolioAebiLaser from "/public/assets/aebilaser-site.png";

export function Card() {
  const { projects } = useProjectsContext();
 
  const { t } = useTranslation("common");

  return (
    <>
      
        <S.Card data-aos="fade-right" key="Site ITAQUI CELL">
          <S.Info>
            <S.Title>Site ITAQUI CELL</S.Title>
            <S.Description>Criação do Website da empresa ITAQUI CELL</S.Description>
            <Button link="https://itaquicell.com.br/">{t("projects.button")}</Button>
          </S.Info>
          <S.Image src={portfolioItaquicell.src} alt="Image Project" />
        </S.Card>

        <S.Card data-aos="fade-right" key="Site ITAQUI CELL">
          <S.Info>
            <S.Title>Site AEBI LASER</S.Title>
            <S.Description>Criação do Website da empresa AEBI LASER</S.Description>
            <Button link="https://aebilaser.com.br/">{t("projects.button")}</Button>
          </S.Info>
          <S.Image src={portfolioAebiLaser.src} alt="Image Project" />
        </S.Card>
      
    </>
  );
}
