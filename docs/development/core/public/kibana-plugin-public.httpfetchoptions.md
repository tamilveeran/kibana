<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [kibana-plugin-public](./kibana-plugin-public.md) &gt; [HttpFetchOptions](./kibana-plugin-public.httpfetchoptions.md)

## HttpFetchOptions interface

All options that may be used with a [HttpHandler](./kibana-plugin-public.httphandler.md)<!-- -->.

<b>Signature:</b>

```typescript
export interface HttpFetchOptions extends HttpRequestInit 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [headers](./kibana-plugin-public.httpfetchoptions.headers.md) | <code>HttpHeadersInit</code> | Headers to send with the request. See [HttpHeadersInit](./kibana-plugin-public.httpheadersinit.md)<!-- -->. |
|  [prependBasePath](./kibana-plugin-public.httpfetchoptions.prependbasepath.md) | <code>boolean</code> | Whether or not the request should automatically prepend the basePath. Defaults to <code>true</code>. |
|  [query](./kibana-plugin-public.httpfetchoptions.query.md) | <code>HttpFetchQuery</code> | The query string for an HTTP request. See [HttpFetchQuery](./kibana-plugin-public.httpfetchquery.md)<!-- -->. |
