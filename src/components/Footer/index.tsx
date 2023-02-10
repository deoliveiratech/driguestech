import { useTranslation } from "next-i18next";
import { Container } from "styles/global";

import * as S from "./style";

export function Footer() {
  const { t } = useTranslation("common");

  return (
    <S.Footer id="contact">
      <Container>
        <S.Wrapper>
          <S.Work>{t("footer.ready")}</S.Work>
          <S.City>Curitiba, PR, Brazil</S.City>
          <S.Email href="mailto:driguestech@gmail.com" target="_blank">
            driguestech@gmail.com
          </S.Email>
          <S.Phone>(+55) 41 99134-9332</S.Phone>
          <S.SocialLinks>
            <S.Link href="https://github.com/digoliveiradev" target="_blank">
              github
            </S.Link>
            <S.Link
              href="https://www.linkedin.com/in/roliveirainfo/"
              target="_blank"
            >
              linkedin
            </S.Link>
            <S.Link
              href="https://www.instagram.com/roliveirainfo/"
              target="_blank"
            >
              instagram
            </S.Link>
          </S.SocialLinks>
        </S.Wrapper>
        <S.Copy>
          &copy; {new Date().getFullYear()} {t("footer.right")}{" "}
          <span>DRIGUESTECH</span>
        </S.Copy>
      </Container>
    </S.Footer>
  );
}
