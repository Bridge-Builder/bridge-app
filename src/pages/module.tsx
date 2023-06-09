import Head from 'next/head';
import { ArticleMain } from '@/styles/pages/Main.styles';
import { useApp } from '@/components/providers/serviceApp/ServiceApp';
import Button from '@/modules/ui/button/Button';
import { TextEditor } from '@/modules/textEditor/TextEditor';

export default function Module() {
  const { headTitle } = useApp();

  return (
    <ArticleMain>
      <Head>
        <title>{headTitle || ''}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>모듈 페이지</h2>
      <div>
        <Button color={'blue'}>1213</Button>
      </div>
      <div>
        <TextEditor />
      </div>
    </ArticleMain>
  );
}
