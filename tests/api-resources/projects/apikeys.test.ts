// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ReadmeV2 from 'readme-v2';

const client = new ReadmeV2({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource apikeys', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.projects.apikeys.create('subdomain', { label: 'x' });
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
    const response = await client.projects.apikeys.create('subdomain', { label: 'x' });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.projects.apikeys.retrieve('3af0b057194fb913baa7c960', {
      subdomain: 'subdomain',
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
    const response = await client.projects.apikeys.retrieve('3af0b057194fb913baa7c960', {
      subdomain: 'subdomain',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.projects.apikeys.update('3af0b057194fb913baa7c960', {
      subdomain: 'subdomain',
      label: 'x',
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
    const response = await client.projects.apikeys.update('3af0b057194fb913baa7c960', {
      subdomain: 'subdomain',
      label: 'x',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.projects.apikeys.list('subdomain');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.projects.apikeys.list(
        'subdomain',
        { page: 1, per_page: 1 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ReadmeV2.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = client.projects.apikeys.delete('3af0b057194fb913baa7c960', {
      subdomain: 'subdomain',
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
    const response = await client.projects.apikeys.delete('3af0b057194fb913baa7c960', {
      subdomain: 'subdomain',
    });
  });
});
