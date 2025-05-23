// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ReadmeV2 from 'readme-v2';

const client = new ReadmeV2({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource apis', () => {
  // skipped: tests are disabled for the time being
  test.skip('create', async () => {
    const responsePromise = client.branches.apis.create('v9605132.1324476774-!:* .!-e53_F');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('create: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.branches.apis.create(
        'v9605132.1324476774-!:* .!-e53_F',
        { schema: {}, upload_source: {}, url: {} },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ReadmeV2.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.branches.apis.retrieve('! "g*zbv -.t{yml', {
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
    const response = await client.branches.apis.retrieve('! "g*zbv -.t{yml', {
      branch: 'v9605132.1324476774-!:* .!-e53_F',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.branches.apis.update('! "g*zbv -.t{yml', {
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
    const response = await client.branches.apis.update('! "g*zbv -.t{yml', {
      branch: 'v9605132.1324476774-!:* .!-e53_F',
      schema: {},
      upload_source: {},
      url: {},
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.branches.apis.list('v9605132.1324476774-!:* .!-e53_F');
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
    const responsePromise = client.branches.apis.delete('! "g*zbv -.t{yml', {
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
    const response = await client.branches.apis.delete('! "g*zbv -.t{yml', {
      branch: 'v9605132.1324476774-!:* .!-e53_F',
    });
  });
});
