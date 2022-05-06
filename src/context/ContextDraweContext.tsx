import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SidebarDrawerProviderProps {
  children: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn


const SidebarDrawerContet = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {
  const disclosure = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    disclosure.onClose();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[router.asPath])


  return (
    <SidebarDrawerContet.Provider value={disclosure} >
      {children}
    </SidebarDrawerContet.Provider>
  )
}


export const useSidebarDrawer = () => useContext(SidebarDrawerContet);
