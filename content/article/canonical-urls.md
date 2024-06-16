---
title: Canonical URLs
description: What are canonical URLs and how can they be used?
categories:
    - web-dev
    - concepts
references:
    - https://www.semrush.com/blog/canonical-url-guide/
    - https://seranking.com/blog/redirect-vs-canonical-tag/
---

## What is a canonical url?

Canonicalisation is a process that will select the 'representative', or canonical url of a piece of content. So if you have a set of duplicate pages, search engines will only show the canonical version as opposed to the duplicate content.

An example of a duplicate URL commonly pops up with paginated content. Consider these two URLs where you'd expect them to serve the same content.

- http://rudimentary.dev/category/web-dev?page=1
- http://rudimentary.dev/category/web-dev

Here the search engine will need to decide the canonical URL for display. It will make this decision either way, but sometimes you want to help ensure a specific URL is chosen as the primary URL.

There are ways you can *suggest* to search engines which of these URLs should in fact be the primary version. This will help to prevent something called **keyword cannibalisation**, where your duplicated pages end up competing for search ranking with each other.

## What is a canonical tag?

A canonical tag is a piece of HTML code that allows you to suggest to the search engine crawler what the canonical URL for the page is. In doing so suggesting which page to index and give ranking strength to.

The canonical tag is placed in the ```<head>``` of the HTML document and looks like this:

```html
<link rel="canonical" href="http://rudimentary.dev/category/web-dev" />
```

Here, we're using the example giving earlier in the post. We want the canonical URL of the duplicated page `http://rudimentary.dev/category/web-dev?page=1` to be `http://rudimentary.dev/category/web-dev`.

Here we're using the canonical tag to point to the canonical page from the duplicated page, however other articles suggest self-referencing canonicals can be useful. Read more about that here: https://www.semrush.com/blog/canonical-url-guide/.

## What if I have a page redirect?

"I have a redirect from one URL to another, are these not duplicate pages?"

No, they're not. Technically by accessing the redirect URL, yes, both URLs will end up serving you the same content, however the end destination is **always** the same URL.

In this regard, redirects and canonical tags serve similar purposes in regards to canonicalisation, with both helping the search engine to decide on a primary URL.

However canonical tags are used as suggestions to search engines, and redirects are enforce the redirection of the old URL that is not required, to the new one.

- Canonical tags are for pages you need. Such as URLs with pagination or tracking parameters where you simply just need to to tell search engines which is the official version.

- Redirects are for unused or outdated URLs & will indicate a permanent change to search engines. "Hey, don't index me, index this new page instead."
