# apollo-dev-server

[![Build Status](https://travis-ci.org/neenhouse/apollo-dev-server.svg?branch=master)](https://travis-ci.org/neenhouse/apollo-dev-server)

Simple dev cli for remote graphQL web servers with introspection enabled. For development purposes only.

## Usage

First, install package:

```bash
npm install apollo-dev-server --save-dev
```

Then add to your "scripts" package.json entry:

```json
{
    "start:gql": "apollo-dev-server --uri https://my.graphql.server/ --port 4000 --headers \"{authorization: 'Bearer Token'}\""
}
```

_Note: remote graphQL server must have introspection enabled to work_

## Development

```
npm start -- --uri https://my.graphql.server/ --port 8080
```
