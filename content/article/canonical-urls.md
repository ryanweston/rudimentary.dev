---
title: Canonical URLs
description: What are canonical URLs and how can they be used?
publishedDate: 2024-06-22
lastUpdated: 2024-06-22
categories:
    - web-dev
    - concepts
references:
    - https://www.semrush.com/blog/canonical-url-guide/
    - https://seranking.com/blog/redirect-vs-canonical-tag/
---

## What is a canonical URL?

Canonicalisation is a process that selects the 'representative', or canonical URL of a piece of content. If you have a set of duplicate pages, search engines will attempt to deduplicate the results, showing a single version of the content.

An example of a duplicate URL commonly occurs with paginated content. Consider these two URLs where you'd expect them to serve the same content:

- http://rudimentary.dev/category/web-dev?page=1
- http://rudimentary.dev/category/web-dev

Here, the search engine will need to decide the canonical URL for display. It will make this decision either way, but sometimes you want to help ensure a specific URL is chosen as the primary URL.

There are ways you can *suggest* to search engines which of these URLs should, in fact, be the primary version. This will help to prevent something called **keyword cannibalisation**, where your duplicated pages end up competing for search ranking with each other.

Other common examples of why a site may have duplicate content are listed [here](https://developers.google.com/search/docs/crawling-indexing/canonicalization).

- Internationalisation regional variants: Different URLs for i18n but for content that is essentially the same language, such as British English and American English.
- Device variants: Often a page can be served from a mobile-only URL.
- Protocol variants: An HTTP or HTTPS version of the site.
- Accidental versions: Where a demo or staging environment is accidentally indexable.

## What is a canonical tag?

A canonical tag is a piece of HTML code that allows you to suggest to the search engine crawler what the canonical URL for the page is, thereby indicating which page to index and give ranking strength to.

The canonical tag is placed in the `<head>` of the HTML document and looks like this:

```html
<link rel="canonical" href="http://rudimentary.dev/category/web-dev" />
```

Here, we're using the example given earlier in the post. We want the canonical URL of the duplicated page `http://rudimentary.dev/category/web-dev?page=1` to be `http://rudimentary.dev/category/web-dev`.

While a canonical tag is being used to suggest the correct URL from a duplicated page, there are other articles suggesting that self-referencing canonicals could also have a ranking effect. Read more about that here:[https://www.semrush.com/blog/canonical-url-guide/](https://www.semrush.com/blog/canonical-url-guide/).

## What if I have a page redirect?

"I have a redirect from one URL to another. Are these not duplicate pages?"

No, they're not. Technically, by accessing the redirect URL, both URLs will end up serving you the same content. However, the end destination is always the same URL.

In this regard, redirects and canonical tags serve similar purposes concerning canonicalisation, with both helping the search engine to decide on a primary URL.

It's important to remember that canonical tags are used as suggestions to search engines, while redirects (specifically 301 redirects) **enforce the redirection** of the old URL that is not required, to the new one.

- Canonical tags are for pages you need, such as URLs with pagination or tracking parameters, where you simply need to tell search engines which is the official version.

- Redirects are for unused or outdated URLs and will indicate a permanent change to search engines: "Hey, don't index me, index this new page instead."
