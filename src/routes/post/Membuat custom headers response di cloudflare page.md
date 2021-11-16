---
title: 'Membuat custom headers response di cloudflare page'
published_at: '16 Nov 2021'
updated_at: 
description: 'Membuat custom headers http responden di cloudflare page'
author: 'Nopekun'
---

Belum lama ini cloudflare mengumumkan kini secara native cloudflare pages sudah mendukung custom headers.

Berdasarkan informasi yang diunggah cloudflare melalui [blog](https://blog.cloudflare.com/custom-headers-for-pages) resminya, kita dapat dengan mudah membuat custom headers dengan cara membuat file `_headers` di dalam folder build project kita.

Contohnya kita mau menambahkan custom headers untuk meningkatkan SEO website dengan menambahkan `X-Robots-Tag` agar website kita dapat terindex oleh google.

```
https://:project.pages.dev/*
  X-Robots-Tag: all
```

Selain SEO di dalam headers kita dapat mengeset security dan cors.

Referensi: [blog.cloudflare.com](https://blog.cloudflare.com/custom-headers-for-pages/)
