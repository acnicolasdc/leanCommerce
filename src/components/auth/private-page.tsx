import { useUI } from "@contexts/ui.context";
import { useRouter } from "next/router";
import { useEffect } from "react";

export function AuthGuard({ children }: { children: JSX.Element }) {
  const { isAuthorized, setRedirectPage, redirectURL } = useUI();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthorized && router.pathname !== "/login") {
      setRedirectPage(router.pathname);
      router.push("/login");
    }
    if (isAuthorized && router.pathname !== redirectURL) {
      router.push(redirectURL);
    }
  }, [isAuthorized]);

  //if(!user) return <Loading /> // a loading component that prevents the page from rendering

  return children;
}