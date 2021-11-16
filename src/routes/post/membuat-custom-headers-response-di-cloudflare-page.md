---
title: 'Membuat custom headers response di cloudflare page'
published_at: '16 Nov 2021'
updated_at: 
description: 'Membuat custom headers http responden di cloudflare page'
author: 'Nopekun'
---

Belum lama ini cloudflare me-_release_ fitur baru disalah satu layanan mereka yaitu cloudflare pages. Dimana kini _pages_ secara native sudah mendukung custom headers.

Berdasarkan informasi yang diunggah cloudflare melalui [blog](https://blog.cloudflare.com/custom-headers-for-pages) resminya, kita dapat dengan mudah membuat custom headers dengan cara membuat file `_headers` didalam folder build project kita.

Contohnya kita mau menambahkan custom headers untuk meningkatkan SEO website dengan menambahkan `X-Robots-Tag` agar website kita dapat terindex oleh google.

Maka cukup menambahkan kode berikut didalam file `_headers` yang telah kita buat.

```
https://:project.pages.dev/*
  X-Robots-Tag: all
```

Selain SEO _pages_ juga memberikan option untuk mengatur security dan juga cors melalui file `_headers`.

Referensi: [blog.cloudflare.com](https://blog.cloudflare.com/custom-headers-for-pages/)
