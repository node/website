import React from 'react';

import { HeroSection } from './01-Hero';
import { LogoSection } from './02-Logos';
import { ConceptSection } from './03-Concepts';
import { ActivitySection } from './04-Activities';
import { MemberSection } from './05-Members';
import { Footer } from './06-Footer';

const meta = {
  title: '平台工程社区 · 中国',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  return (
    <main>
      <HeroSection />
      <LogoSection />
      <ConceptSection />
      <ActivitySection />
      <MemberSection />
      <Footer />
    </main>
  );
}
