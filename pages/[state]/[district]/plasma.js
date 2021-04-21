import React from 'react';
import { plasmaByDistrict } from '../../../lib/api';
import { humanize, statePaths } from '../../../lib/utils';
import Head from 'next/head';

export default function Plasma({ state, district, plasmaListing }) {
  return (
    <div>
      <Head>
        <title>
          Plasma in {humanize(district)} , {humanize(state)}
        </title>
      </Head>
      <div className='text-3xl mt-4 font-bold'>
        {state} / {district}
      </div>

      <div className='space-y-4 mt-4'>
        {plasmaListing.map((p) => {
          return (
            <div
              key={p.id}
              className='bg-white p-4 flex shadow rounded-lg justify-between'
            >
              <div>
                <div className='font-bold'>{p.name}</div>
                <div>{p.description}</div>
                <div>{p.createdTime}</div>
              </div>
              <div className='flex flex-col'>
                <a href='tel:${p.phone1}'>{p.phone1}</a>
                <a href={p.source_link}>source</a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  return {
    props: {
      state: params.state,
      district: params.district,
      plasmaListing: plasmaByDistrict(params.state, params.district),
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: statePaths('plasma'),
    fallback: false,
  };
}
