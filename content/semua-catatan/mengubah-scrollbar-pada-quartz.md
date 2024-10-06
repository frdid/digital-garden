---
title: Mengubah Tampilan Scrollbar pada Quartz 4
description: 
permalink: 
aliases:
  - Mengubah Tampilan Scrollbar pada Quartz 4
tags: 
draft: false
date: 2024-10-06
---
Mengubah tampilan dari scrollbar yang ada pada website dapat dilakukan dengan memodifikasi fail CSS. Quartz sudah menyiapkan satu fail yang bisa digunakan untuk menampung semua perubahan CSS yang kita lakukan yaitu fail `quartz/styles/custom.scss`

Berikut ini adalah potongan CSS yang dapat digunakan untuk mengubah scrollbar pada Quartz 4.
```css
/* Scrollbar */
::-webkit-scrollbar {
  width: 8px;
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: var(--secondary);
}
```

Potongan CSS diatas sebenarnya dapat digunakan juga pada kasus lainnya tidak harus pada penggunaan Quartz. 

---
**Baca juga:**
- [[mengubah-teks-footnotes-menjadi-teks-lain|Mengubah Teks "Footnotes" Menjadi Teks Lain dengan CSS]]
- [[menambahkan-garis-pemisah-pada-explorer|Menambahkan Garis Pemisah pada Explorer]] 