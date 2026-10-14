import type { AnchorHTMLAttributes, ReactNode } from "react";
import { ButtonLink } from "@/components/common/Button";
import { WHATSAPP_URL } from "@/config/whatsapp";

interface WhatsAppButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: AnchorHTMLAttributes<HTMLAnchorElement>["onClick"];
}

/**
 * Shared CTA for every "talk to us on WhatsApp" button on the site.
 * Defaults to the primary WhatsApp link; pass `href` to point at a
 * different number (e.g. the secondary contact).
 */
export function WhatsAppButton({
  children,
  className = "",
  href = WHATSAPP_URL,
  onClick,
}: WhatsAppButtonProps) {
  return (
    <ButtonLink
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={onClick}
    >
      {children}
    </ButtonLink>
  );
}
