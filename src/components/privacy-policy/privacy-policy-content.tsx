"use client";

import { motion } from "motion/react";
import type { Variants } from "motion/react";
import {
  CONTACT_US,
  COOKIES,
  DATA_COLLECTED,
  DATA_USE,
  INTRODUCTION,
  YOUR_RIGHTS,
} from "@/lib/privacy-policy-constants";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const listVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const listItemVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

function AnimatedSection({ children }: { children: React.ReactNode }) {
  return (
    <motion.section
      className="space-y-4"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-8%" }}
    >
      {children}
    </motion.section>
  );
}

function AnimatedList({ items }: { items: string[] }) {
  return (
    <motion.ul
      className="list-inside list-disc space-y-2 text-sm leading-7 text-muted-foreground sm:text-base"
      variants={listVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-8%" }}
    >
      {items.map((item) => (
        <motion.li key={item} variants={listItemVariants}>
          {item}
        </motion.li>
      ))}
    </motion.ul>
  );
}

function ContactInfoList({
  items,
}: {
  items: { label: string; value: string }[];
}) {
  return (
    <motion.ul
      className="space-y-2 text-sm leading-7 text-muted-foreground sm:text-base"
      variants={listVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-8%" }}
    >
      {items.map((item) => (
        <motion.li key={item.label} variants={listItemVariants}>
          <span className="font-medium text-foreground">{item.label}:</span>{" "}
          {item.value}
        </motion.li>
      ))}
    </motion.ul>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-semibold text-foreground">{children}</h2>
  );
}

function SectionText({ children }: { children: React.ReactNode }) {
  return <p className="leading-7 text-muted-foreground">{children}</p>;
}

function AnimatedSeparator() {
  return (
    <motion.div
      className="h-px w-full bg-border"
      style={{ transformOrigin: "left" }}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
    />
  );
}

export default function PrivacyPolicyContent() {
  return (
    <main className="flex-1 bg-secondary/40 px-4 py-14 sm:px-6 md:py-20">
      <motion.article
        className="mx-auto flex max-w-5xl flex-col gap-8 rounded-2xl border bg-background px-5 py-7 shadow-sm sm:px-8 md:px-10 md:py-10"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut", delay: 0.15 }}
      >
        <AnimatedSection>
          <SectionHeading>{INTRODUCTION.title}</SectionHeading>
          <SectionText>{INTRODUCTION.content}</SectionText>
          <SectionText>{INTRODUCTION.footerContent}</SectionText>
        </AnimatedSection>

        <AnimatedSeparator />

        <AnimatedSection>
          <SectionHeading>{DATA_COLLECTED.title}</SectionHeading>
          <SectionText>{DATA_COLLECTED.content}</SectionText>
          <div className="space-y-5">
            {DATA_COLLECTED.dataCollectedType.map((dataType) => (
              <div key={dataType.title} className="space-y-2">
                <h3 className="font-semibold text-foreground">
                  {dataType.title}
                </h3>
                <AnimatedList items={dataType.content} />
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSeparator />

        <AnimatedSection>
          <SectionHeading>{DATA_USE.title}</SectionHeading>
          <SectionText>{DATA_USE.content}</SectionText>
          <AnimatedList items={DATA_USE.uses} />
          <SectionText>{DATA_USE.footerContent}</SectionText>
        </AnimatedSection>

        <AnimatedSeparator />

        <AnimatedSection>
          <SectionHeading>{COOKIES.title}</SectionHeading>
          <SectionText>{COOKIES.content}</SectionText>
          <AnimatedList items={COOKIES.uses} />
          <SectionText>{COOKIES.footerContent}</SectionText>
        </AnimatedSection>

        <AnimatedSeparator />

        <AnimatedSection>
          <SectionHeading>{YOUR_RIGHTS.title}</SectionHeading>
          <SectionText>{YOUR_RIGHTS.content}</SectionText>
          <AnimatedList items={YOUR_RIGHTS.rights} />
          <SectionText>{YOUR_RIGHTS.footerContent}</SectionText>
        </AnimatedSection>

        <AnimatedSeparator />

        <AnimatedSection>
          <SectionHeading>{CONTACT_US.title}</SectionHeading>
          {CONTACT_US.content ? (
            <SectionText>{CONTACT_US.content}</SectionText>
          ) : null}
          {CONTACT_US.contactInfo.length > 0 ? (
            <ContactInfoList items={CONTACT_US.contactInfo} />
          ) : null}
        </AnimatedSection>
      </motion.article>
    </main>
  );
}
