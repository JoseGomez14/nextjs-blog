---
title: Is React a library or a framework?
date: '2022-10-12'
description: Learn the difference between a library and a framework and how it affects React
topic: act
tags:
- react
---

There is a fine line nowadays between what is a library or a framework. Officially, **React calls itself a library on its website**. This is because in order to create a complete application, you need to use other libraries, and React is considered to focus specifically on building user interfaces.

For example, *React* does not offer an official application routing system. Therefore, you have to use a library like [React Router](https://reactrouter.com/) or use a *framework* like [Next.js](https://nextjs.org/) that already includes a system of routing.

You also can't use React to add the headers that go into the `<head>` in your application, and you'll also need another library or framework to fix this.

Another difference is that React doesn't force you into which app wrapper to use. On the other hand, `Angular` in its own tutorial already tells you that you must use `@angular/cli` to create an application, on the other hand, React always leaves you the freedom to choose which packager to use and offers different options.

**Still, there are people who consider React as a framework**. Although there is no official definition of what a framework is, most people consider a framework to be a library that includes other libraries to create a complete application with clear rules and almost no configuration.

For example, **Next.js could be considered a React framework** because it includes React, a routing system, a server-side rendering system, etc.