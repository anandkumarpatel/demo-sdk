// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ReadmeV2 from 'readme-v2';

const client = new ReadmeV2({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource customPages', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.branches.customPages.create('v9605132.1324476774-!:* .!-e53_F', {
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

  // skipped: tests are disabled for the time being
  test.skip('create: required and optional params', async () => {
    const response = await client.branches.customPages.create('v9605132.1324476774-!:* .!-e53_F', {
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

  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.branches.customPages.retrieve('slug', {
      branch: 'v9605132.1324476774-!:* .!-e53_F',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.branches.customPages.retrieve('slug', {
      branch: 'v9605132.1324476774-!:* .!-e53_F',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.branches.customPages.update('slug', {
      branch: 'v9605132.1324476774-!:* .!-e53_F',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: required and optional params', async () => {
    const response = await client.branches.customPages.update('slug', {
      branch: 'v9605132.1324476774-!:* .!-e53_F',
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

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.branches.customPages.list('v9605132.1324476774-!:* .!-e53_F');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = client.branches.customPages.delete('slug', {
      branch: 'v9605132.1324476774-!:* .!-e53_F',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: required and optional params', async () => {
    const response = await client.branches.customPages.delete('slug', {
      branch: 'v9605132.1324476774-!:* .!-e53_F',
    });
  });
});
