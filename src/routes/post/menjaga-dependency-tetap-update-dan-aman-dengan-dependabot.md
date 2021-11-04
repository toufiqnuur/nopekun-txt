---
title: 'Menjaga dependency tetap update dan aman dengan dependabot'
published_at: '4 Nov 2021'
updated_at:
description: 'Memastikan dependency tetap aman dan update menggunakan dependabot.'
author: 'Nopekun'
---

Apa itu dependabot ?

Dependabot merupakan sebuah tool yang berguna untuk mengecek dan memperbarui dependency yang disimpan di repositori github.

Cara kerjanya cukup sederhana yaitu membandingkan apakah ada package versi terbaru atau tidak. Pengecekan dapat kita atur rentang waktunya misalnya perhari atau perminggu.

Kemudian jika ada package versi terbaru maka dependabot akan melakukan `pull request` ke repositori kita. Setelah itu tinggal kita `merge` dengan cara mengetikan komentar di `pull request` tersebut dengan perintah `@dependabot merge`.

Setelah itu dependabot akan otomatis melakukan `merge` setelah berhasil melewati proses CI.

**Cara setup dependabot**

Untuk konfigurasi dependabot caranya sangat mudah.

Pertama kita buat folder baru diroot project dengan nama `.github` kemudian buat file `dependabot.yml` didalam folder tersebut.

Kemudian edit `dependabot.yml` seperti berikut.

```yaml
version: 2
updates:
  - package-ecosystem: 'npm'
    directory: '/'
    schedule:
      interval: 'daily
```

Untuk `package-ecosystem` yang didukung lihat [disini](https://docs.github.com/en/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates#package-ecosystem)

Schedule interval kita bisa atur, mau dicek tiap hari (`daily`) atau mingguan (`weekly`)

Referensi: [docs.github.com](https://docs.github.com/en/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates)
