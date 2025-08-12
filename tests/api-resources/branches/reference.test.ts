// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ReadmeV2 from 'testtesttest';

const client = new ReadmeV2({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource reference', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.branches.reference.create('v9605132.1324476774-: !e3abFuO', {
      category: { uri: '/branches/vstable/categories/guides/C"g*W' },
      title: 'title',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.branches.reference.create('v9605132.1324476774-: !e3abFuO', {
      category: { uri: '/branches/vstable/categories/guides/C"g*W' },
      title: 'title',
      allow_crawlers: 'enabled',
      api: {
        method: 'get',
        path: 'path',
        schema: {},
        source: 'api',
        stats: {
          additional_properties: true,
          callbacks: true,
          circular_references: true,
          common_parameters: true,
          discriminators: true,
          links: true,
          polymorphism: true,
          references: true,
          server_variables: true,
          style: true,
          webhooks: true,
          xml: true,
        },
        uri: '/branches/vstable/apis/-a"o&%zyml',
      },
      api_config: 'authentication',
      connections: { recipes: [{ uri: '/branches/vstable/recipes/-a"o&%' }] },
      content: {
        body: 'body',
        excerpt: 'excerpt',
        link: { new_tab: true, url: 'url' },
        next: { description: 'description', pages: [{ slug: 'slug', title: 'title', type: 'basic' }] },
      },
      metadata: {
        description: 'description',
        image: { uri: '/images/3af0b057194fb913baa7c960' },
        keywords: 'keywords',
        title: 'title',
      },
      parent: { uri: '/branches/vstable/guides/k0zop|' },
      position: 0,
      privacy: { view: 'public' },
      slug: 'x',
      state: 'current',
      type: 'api_config',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.branches.reference.retrieve('slug', {
      branch: 'v9605132.1324476774-: !e3abFuO',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.branches.reference.retrieve('slug', {
      branch: 'v9605132.1324476774-: !e3abFuO',
      dereference: 'true',
      reduce: 'true',
    });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.branches.reference.update('slug', {
      branch: 'v9605132.1324476774-: !e3abFuO',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.branches.reference.update('slug', {
      branch: 'v9605132.1324476774-: !e3abFuO',
      allow_crawlers: 'enabled',
      api: {
        method: 'get',
        path: 'path',
        schema: {},
        source: 'api',
        stats: {
          additional_properties: true,
          callbacks: true,
          circular_references: true,
          common_parameters: true,
          discriminators: true,
          links: true,
          polymorphism: true,
          references: true,
          server_variables: true,
          style: true,
          webhooks: true,
          xml: true,
        },
        uri: '/branches/vstable/apis/-a"o&%zyml',
      },
      category: { uri: '/branches/vstable/categories/guides/C"g*W' },
      connections: { recipes: [{ uri: '/branches/vstable/recipes/-a"o&%' }] },
      content: {
        body: 'body',
        excerpt: 'excerpt',
        link: { new_tab: true, url: 'url' },
        next: { description: 'description', pages: [{ slug: 'slug', title: 'title', type: 'basic' }] },
      },
      metadata: {
        description: 'description',
        image: { uri: '/images/3af0b057194fb913baa7c960' },
        keywords: 'keywords',
        title: 'title',
      },
      parent: { uri: '/branches/vstable/guides/k0zop|' },
      position: 0,
      privacy: { view: 'public' },
      body_slug: 'x',
      state: 'current',
      title: 'title',
      type: 'api_config',
    });
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.branches.reference.delete('slug', {
      branch: 'v9605132.1324476774-: !e3abFuO',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('delete: required and optional params', async () => {
    const response = await client.branches.reference.delete('slug', {
      branch: 'v9605132.1324476774-: !e3abFuO',
    });
  });
});
