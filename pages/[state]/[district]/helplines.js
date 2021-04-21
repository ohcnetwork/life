import React from 'react';
import { helplineByDistrict } from '../../../lib/api';
import { statePaths, humanize, parseDateString } from '../../../lib/utils';
import Head from 'next/head';
import Breadcumb from '../../../components/Breadcumb';

export default function Helpline({ state, district, helplines }) {
  return (
    <section className='flex flex-col items-center md:pt-10'>
      <Head>
        <title>
          Helpline in {humanize(district)} , {humanize(state)}
        </title>
      </Head>
      <Breadcumb
        list={[
          { href: `/${state}`, name: humanize(state) },
          { href: `/${state}/${district}`, name: humanize(district) },
          { href: null, name: 'Helplines' },
        ]}
      />
      <h1 className='mt-4 font-black text-6xl text-gray-900 md:text-left text-center'>
        {humanize(district)}
      </h1>
      <div className='space-y-4 mt-4 max-w-3xl w-full'>
        {helplines.map((p) => {
          return (
            <div
              key={p.id}
              className='w-full bg-white p-4 flex shadow rounded-lg justify-between'
            >
              <div>
                <div className='font-bold'>{p.name}</div>
                <div className='font-bold'>{p.email}</div>
                <div>{p.description}</div>
                <div>{parseDateString(p.createdTime)}</div>
              </div>
              <div className='flex flex-col'>
                <a href={`tel:${p.phone1}`}>{p.phone1}</a>
                {p.sourceUrl && (
                  <a href={p.sourceUrl}>{p.source || 'source'}</a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export async function getStaticProps({ params }) {
  return {
    props: {
      state: params.state,
      district: params.district,
      helplines: helplineByDistrict(params.state, params.district),
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: statePaths('helpline'),
    fallback: false,
  };
}
