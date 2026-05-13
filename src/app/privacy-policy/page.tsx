import type { Metadata } from "next";
import PrivacyPolicyContent from "@/components/privacy-policy/privacy-policy-content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Clinical Support App, including information collection, use, cookies, rights, and contact details.",
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />;
}
