import { useTranslation } from "next-i18next";

import { icons } from "./icons";
import { Button } from "../Button";
import { Container } from "styles/global";

import * as S from "./style";

export function Hero() {
  const { t } = useTranslation("common");

  return (
    <S.SectionHome id="home">
      <Container>
        <S.Wrapper>
          <S.Name>
            
            <br />
            DRIGUESTECH
          </S.Name>
          <S.Description>{t("hero.description")}</S.Description>
          <S.Icons>
            {icons.map(({ image, alt, path }) => (
              <S.Link href={path} key={path} target="_blank">
                <S.Icon src={image} alt={alt} />
              </S.Link>
            ))}
          </S.Icons>
          <Button>{t("hero.chat")}</Button>
        </S.Wrapper>
        <S.Box>
          <S.Arrow />
          <S.Arrow />
          <S.Arrow />
        </S.Box>
      </Container>
    </S.SectionHome>
  );
}
