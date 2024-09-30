import { getPage, getPages } from '@/app/source';
import type { Metadata } from 'next';
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import { Pre, CodeBlock } from 'fumadocs-ui/components/codeblock';
import { DartIcon } from '@/app/icons/Dart';

export default async function Page({
  params,
}: {
  params: { slug?: string[] };
}) {
  const page = getPage(params.slug);

  if (page == null) {
    notFound();
  }

  const MDX = page.data.exports.default;

  return (
    <DocsPage toc={page.data.exports.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription className='text-md'>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX components={{
          pre: ({ ref: _ref, ...props }) => {
            {/*@ts-ignore */ }
            return <CodeBlock {...props} icon={props.title?.includes('dart') ? <DartIcon height={34} /> : props.icon} >
              <Pre>{props.children}</Pre>
            </CodeBlock>
          },
        }} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return getPages().map((page) => ({
    slug: page.slugs,
  }));
}

export function generateMetadata({ params }: { params: { slug?: string[] } }) {
  const page = getPage(params.slug);

  if (page == null) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  } satisfies Metadata;
}
