import { Icon, Link, Text } from "@chakra-ui/react";
import { ElementType } from "react";


interface NavLinkProps{
  icon: ElementType;
  children: string;
}

export function NavLink({icon, children}: NavLinkProps) {
  return (
    <Link display="flex" alignItems="ceter">
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">{children}</Text>
    </Link>
  );
}
