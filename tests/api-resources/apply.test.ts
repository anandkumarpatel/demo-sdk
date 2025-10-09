// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ReadmeV2 from 'testtesttest';

const client = new ReadmeV2({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource apply', () => {
  // Prism tests are disabled
  test.skip('listOpenRoles', async () => {
    const responsePromise = client.apply.listOpenRoles();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('submitApplication: only required params', async () => {
    const responsePromise = client.apply.submitApplication({ job: 'job', name: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('submitApplication: required and optional params', async () => {
    const response = await client.apply.submitApplication({
      job: 'job',
      name: 'x',
      coverLetter: 'coverLetter',
      dont_really_apply: true,
      email: 'dev@stainless.com',
      github: 'https://example.com',
      linkedin: 'https://example.com',
      pronouns: 'pronouns',
    });
  });
});
