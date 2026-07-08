import { notFound } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PROJECTS, getAdjacentProjects, getProject } from '@/lib/data/projects';
import { pageMetadata } from '@/lib/metadata';
import { ProjectContent } from './ProjectContent';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  // Assuming default 'en' metadata since it's statically built server-side
  return pageMetadata(project.name.en, project.brand.en);
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);

  return (
    <>
      <Navbar />
      <ProjectContent project={project} prev={prev} next={next} />
      <section data-scroll-theme="dark" className="theme-dark rounded-t-[2.5rem]">
        <Footer />
      </section>
    </>
  );
}
