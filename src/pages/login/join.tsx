import Head from 'next/head';
import { ArticleMain } from '@/styles/pages/Main.styles';
import { useApp } from '@/components/providers/serviceApp/ServiceApp';
import Router from 'next/router';
import React, { useState } from 'react';
import { ROUTE } from '@/config/routeConfig';
import { fetchPostUserJoin } from '@/axios/user';

export default function LoginJoin() {
  const { headTitle } = useApp();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const body = { name, email };
      await fetchPostUserJoin(body);
      await Router.push(ROUTE.INDEX);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ArticleMain>
      <Head>
        <title>{headTitle || ''}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>회원가입 페이지</div>
      <form onSubmit={submitData}>
        <h1>Signup user</h1>
        <input
          autoFocus
          onChange={e => setName(e.target.value)}
          placeholder="Name"
          type="text"
          value={name}
        />
        <input
          onChange={e => setEmail(e.target.value)}
          placeholder="Email address"
          type="text"
          value={email}
        />
        <input disabled={!name || !email} type="submit" value="Signup" />
        <a href="#" onClick={() => Router.push('/')}>
          or Cancel
        </a>
      </form>
    </ArticleMain>
  );
}
