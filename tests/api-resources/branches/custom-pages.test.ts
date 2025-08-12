// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ReadmeV2 from 'testtesttest';

const client = new ReadmeV2({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource customPages', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.branches.customPages.create('v9605132.1324476774-: !e3abFuO', {
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
    const response = await client.branches.customPages.create('v9605132.1324476774-: !e3abFuO', {
      title: 'title',
      appearance: { fullscreen: true },
      content: { body: 'body', type: 'markdown' },
      metadata: {
        description: 'description',
        image: { uri: '/images/3af0b057194fb913baa7c960', url: 'https://example.com' },
        keywords: 'keywords',
        title: 'title',
      },
      privacy: { view: 'public' },
      slug: 'slug',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.branches.customPages.retrieve('slug', {
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
    const response = await client.branches.customPages.retrieve('slug', {
      branch: 'v9605132.1324476774-: !e3abFuO',
    });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.branches.customPages.update('slug', {
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
    const response = await client.branches.customPages.update('slug', {
      branch: 'v9605132.1324476774-: !e3abFuO',
      appearance: { fullscreen: true },
      content: { body: 'body', type: 'markdown' },
      metadata: {
        description: 'description',
        image: { uri: '/images/3af0b057194fb913baa7c960', url: 'https://example.com' },
        keywords: 'keywords',
        title: 'title',
      },
      privacy: { view: 'public' },
      body_slug: 'slug',
      title: 'title',
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.branches.customPages.list('v9605132.1324476774-: !e3abFuO');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.branches.customPages.delete('slug', {
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
    const response = await client.branches.customPages.delete('slug', {
      branch: 'v9605132.1324476774-: !e3abFuO',
    });
  });
});
