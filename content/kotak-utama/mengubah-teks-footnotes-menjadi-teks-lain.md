---
title: Mengubah Teks "Footnotes" Menjadi Teks Lain dengan CSS
description: 
permalink: 
aliases:
  - Mengubah Teks Footnotes Menjadi Teks Lain dengan CSS
tags: 
draft: false
date: 2024-10-06
---
Beberapa teks/kata/kalimat dalam Quartz 4 mungkin tidak dapat diubah, salah satunya adalah kata “Footnotes” saat menggunakan fitur Footnotes seperti di Obsidian. Format/sintaks yang digunakan untuk mengatur footnotes pada Quartz 4 adalah [GitHub Flavored Markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) seperti yang dijelaskan pada [dokumentasi Quartz tentang Authoring Content](https://quartz.jzhao.xyz/authoring-content).

Salah satu cara mengatasi masalah ini adalah dengan mengubahnya melalui CSS. Caranya sama seperti pada tulisan [[mengubah-scrollbar-pada-quartz|Mengubah Tampilan Scrollbar pada Quartz 4]] yaitu dengan memodifikasi atau menambahkan potongan CSS ke file `custom.scss`

Berikut adalah potongan CSS yang dapat digunakan untuk mengubah kata “Fotenotes” menjadi “Catatan Kaki”. 
```css
/* Footnotes */
.footnotes {
  & h2{
    text-indent: -9999px;
    &:before {
      content: "Catatan Kaki";
      text-indent: 0;
      float: left;
      font-size: 1.4rem;
      font-weight: 800;
    }
  }
}
```


Jika kamu tidak mengetahui *class* atau *ID* dari elemen yang ingin dimodifikasi (dalam kasus ini footnotes), maka manfaat fitur *Inspect (Developer)"* yang ada pada peramban yang kamu gunakan.


---
**Baca juga:**
- [[menambahkan-garis-pemisah-pada-explorer|Menambahkan Garis Pemisah pada Explorer]] 