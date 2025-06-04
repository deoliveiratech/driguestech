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
          <S.City>{t("footer.slogan")}</S.City>
          <S.Email href="mailto:driguestech@gmail.com" target="_blank" rel="noopener noreferrer">
            driguestech@gmail.com
          </S.Email>
          <S.Link href="https://api.whatsapp.com/send?phone=+5541991349332&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre" 
          target="_blank" rel="noopener noreferrer">Whats: (+55) 41 99134-9332
          </S.Link>
          <S.SocialLinks>
            <S.Link href="https://github.com/deoliveiratech" target="_blank" rel="noopener noreferrer">
              github
            </S.Link>
            <S.Link
              href="https://www.linkedin.com/in/deoliveiratech/"
              target="_blank" rel="noopener noreferrer"
            >
              linkedin
            </S.Link>
            <S.Link
              href="https://www.instagram.com/rodigo.rodrigues"
              target="_blank" rel="noopener noreferrer"
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
