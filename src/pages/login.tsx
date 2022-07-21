import Container from "@components/ui/container";
import LoginForm from "@components/auth/login-form";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Container>
        <LoginForm />
      </Container>
    </div>
  );
}
LoginPage.isAuthorized = true;
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        "common",
        "forms",
        "menu",
        "footer",
      ])),
    },
  };
};
