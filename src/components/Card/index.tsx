import { useProjectsContext } from "hooks/useProjectsContext";
//import { useTranslation } from "next-i18next";

//import { IProjects } from "types";

import { Button } from "../Button";
import * as S from "./style";

import portfolioItaquicell from "../../../public/assets/itaquicell-site.png";
import portfolioDriguesTech from "../../../public/assets/drigues-tech.png";
import portfolioAebiLaser from "../../../public/assets/aebi-site.png";
import portfolioAebiLaser2 from "../../../public/assets/aebi-site-2.png";
import portfolioPalefixAr from "../../../public/assets/palefixArgentina.png";
import erpAssisTec from "../../../public/assets/erp_assistencia_tecnica.png";
import capilovers from "../../../public/assets/capilovers.png";

export function Card() {
  const { projects } = useProjectsContext();

  //const { t } = useTranslation("common");

  return (
    <>
      <S.Card data-aos="fade-right" key="Site Capi Lovers">
        <S.Info>
          <S.Title>Site Capi Lovers</S.Title>
          <S.Description>Desenvolvimento do Website de divulgação do produto</S.Description>
          <Button link="https://capilovers.com.br/">Ver projeto</Button>
        </S.Info>
        <S.Image src={capilovers.src} alt="Website Capi Lovers" />
      </S.Card>
      <S.Card data-aos="fade-right" key="Site PALEFIX Argentina">
        <S.Info>
          <S.Title>Site PALEFIX Argentina</S.Title>
          <S.Description>Desenvolvimento do Website da empresa PALEFIX para a Argentina</S.Description>
          <Button link="https://palefix.com.ar/">Ver projeto</Button>
        </S.Info>
        <S.Image src={portfolioPalefixAr.src} alt="Website Palefix Argentina" />
      </S.Card>

      <S.Card data-aos="fade-right" key="Site AEBI LASER Novo">
        <S.Info>
          <S.Title>Site AEBI LASER Novo</S.Title>
          <S.Description>Adequação de novo Layout do Website da empresa AEBI LASER</S.Description>
          <Button link="https://aebilaser.com.br/">Ver projeto</Button>
        </S.Info>
        <S.Image src={portfolioAebiLaser2.src} alt="Image Project" />
      </S.Card>

      <S.Card data-aos="fade-right" key="Site ITAQUI CELL">
        <S.Info>
          <S.Title>Site ITAQUI CELL</S.Title>
          <S.Description>Criação do Website da empresa ITAQUI CELL</S.Description>
          <Button link="https://itaquicell.com.br/">Ver projeto</Button>
        </S.Info>
        <S.Image src={portfolioItaquicell.src} alt="Image Project" />
      </S.Card>

      <S.Card data-aos="fade-right" key="Site ITAQUI CELL">
        <S.Info>
          <S.Title>ERP Assistência Técnica</S.Title>
          <S.Description>Desenvolvimento de ERP para empresa de Assistência Técnica</S.Description>
          <Button link="https://itaquicell.com.br/sistema">Ver projeto</Button>
        </S.Info>
        <S.Image src={erpAssisTec.src} alt="Image Project" />
      </S.Card>

      <S.Card data-aos="fade-right" key="Site ITAQUI CELL">
        <S.Info>
          <S.Title>Site driguestech</S.Title>
          <S.Description>Criação de meu portfólio na tecnologia NEXT.JS</S.Description>
          <Button link="https://driguestech.vercel.app/">Ver projeto</Button>
        </S.Info>
        <S.Image src={portfolioDriguesTech.src} alt="Image Project" />
      </S.Card>

      <S.Card data-aos="fade-right" key="Site ITAQUI CELL">
        <S.Info>
          <S.Title>Site AEBI LASER</S.Title>
          <S.Description>Criação do Website da empresa AEBI LASER</S.Description>
          <Button link="https://aebilaser.com.br/">Ver projeto</Button>
        </S.Info>
        <S.Image src={portfolioAebiLaser.src} alt="Image Project" />
      </S.Card>

    </>
  );
}
