const MyCred = new Buffer.from(
  JSON.stringify({
    type: "service_account",
    project_id: "nice-car-wash",
    private_key_id: "9f7e6906e87023446ba360ce79a0b1e4a196b97a",
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDXjbDLmErcxlLp\ntyYE8hjxELF2990ffPticX7dB0PPKk5/tDbj5MKtehslwESaO3UtDgfKRjP3/9fC\nTInZlybwlO5OK/h//xik9uAo/yXVlIk1a7aRwwvCFEGZD95ZKMSQlsqxio1bA3Nm\nH65w0KJmwHcTv9qrFlMlv2GOW8Ea/kOPYsxhpK6oiyVjeyDzHPlgJ/kpJE99mEjW\nwbmcG+qTVYkExktcPQQAqAP+DekUrDf8rs6eWXwZVMbGIWhfxT+4YjLIaE2Phndh\nle9/fi9fhHyGxPh9n6lE1a8lDCYdEoSGXa3EBYx5+l7tnKEHnoL6aRgE2WGDHXv5\nfZgNweNdAgMBAAECggEAMHGA3ATOQFdXD30Qj5h8SAM1KxRSDw9W7N0ugoytLewn\nZ7ZwBqAlK3kvjDitgk8eCsHmOMy1xcTrL9jlOzBn+TYzZ4Ck0NlbJ8nu/2+2SE2h\nV47tYU1pQVUtl/Fzymxp3sfw5l1J3vxDzV4N5X9SHE8hg+AAjCZQigF8spKG7+Ju\nqDH9nuO4lgGE0HCofageqtVfD+499ha3h7qo61EPSRJs9hbEUMlYIXDwp+mdr5xZ\ntZKQAygAtNmWigAS68WPfiXM6oeKJQDxxAQsyzMyIukhJlBCHSf99A2puZo1rnym\n2aqKM1uniDWNqHinzTGOlEgudpqgmAfTo0pMDX6U8QKBgQD7JjQwFX6VvXGFiYOS\ndq50aBjmLDwrXhKADPLLkqblI51mvFAO1mQJBbohiQ97MBjigSVLaSqmxzoG09PN\nXoxvfNtBoJdgXOkA2gUUuhorizdZeadVhi+Xcn3IP8qtuCfhBqEHBbcpxVwg4k0z\nrG1wt8MYIHuAYOvuhnJVnXHY8QKBgQDbt3wxlsxqkfoyynfP3iidvxICT1o9iXyo\nQaR5Zv9eHtrfoZDYEHHs+q0NSC04suVOQxnLe5NbyFDpLDFfGGHkoTxH64Jexvtb\n6Ul7oBzvGKbWzUkmr3YZUhz7+ndMby7TucPkkJ9xkq9E8saiWV1jWGr8pl8eZPfi\nRnMriMLRLQKBgQCYZOMv9ir8g5qZ1AqRWhCbs/q/2EGecxO4vaKqIk/BJK5DA6t0\nhWToEKCT7s4FCvdeoczWiHcIAkXUlL6llGSU1edZWC/imh4MlT6WCCMPHwez9Fy0\nSZshQ6jNVOAQL3mLUvFtCGvPHeG8VnVQEKXLysXIIxWtnaIr90rzZnkJkQKBgF5P\nlUSn6Ri5jj7s/56/SonjsTRCoYaWlGaYvqPJ3UWmUub5L/Y+oNhLBasU1yxmRd1h\nGhpo8ejMxEZCTPL3wVVlDD4GzlAmc1CRg5RINwM+fqbnOUYcvMHDqGNUsI6jjuMc\n8wQSPA6BGzCqUS7w0xBIrKvEMkIWrvx2pwsByjYFAoGAcHI//XXpAycQkx4OvfLU\nQFFYOr8HflB9/mqRVDXFEkJ7lXNc8mVxZPh384mGwWUPcgDS0st090+52RLSpikq\nJN1wnSMxieJCfJzl2+O2q7TRtHEPeDkuaOryGUvPj0Yx5Rtzi07hFi1BF+srnqvH\nRaKTCylUlggmlnj/PECn8Q0=\n-----END PRIVATE KEY-----\n",
    client_email:
      "firebase-adminsdk-gk1x4@nice-car-wash.iam.gserviceaccount.com",
    client_id: "117085224630357520002",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
      "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-gk1x4%40nice-car-wash.iam.gserviceaccount.com",
  })
).toString("base64");
console.log(MyCred);

