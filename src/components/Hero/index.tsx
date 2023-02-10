import { useTranslation } from "next-i18next";

import { Button } from "../Button";
import { Container } from "styles/global";

import * as S from "./style";

export function Hero() {
  const { t } = useTranslation("common");

  return (
    <S.SectionHome id="home">
      <S.Container>
        <S.Wrapper>
          <S.Name>
            <br />
            DRIGUESTECH
          </S.Name>
          <S.Description>{t("hero.description")}</S.Description>
          <br />
          <Button link='https://wa.me/5541991349332' >{t("hero.chat")}</Button>
        </S.Wrapper>
        <S.Box>
          <S.Arrow />
          <S.Arrow />
          <S.Arrow />
        </S.Box>
      </S.Container>
    </S.SectionHome>
  );
}
