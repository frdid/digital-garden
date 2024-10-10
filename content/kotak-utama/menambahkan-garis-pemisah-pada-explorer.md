---
title: Menambahkan Garis Pemisah pada Explorer
description: 
permalink: 
aliases:
  - Menambahkan Garis Pemisah pada Explorer
tags: 
draft: false
date: 2024-10-06
---
Saat menggunakan Quartz 4, judul antar catatan pada bagian Explorer atau Jelajah tidak memiliki pemisah. Itu membuat saya sedikit terganggu karena tidak bisa membedakan catatan satu dan lainnya. Maka saya memodifikasi CSS nya dan menambahkan beberapa potongan kode berikut pada fail `custom.scss` 

```css
/* Folder Outer */
.folder-outer {
  &.open {
    ul {
      li {
        border-bottom: 1px solid var(--lightgray);
        &:has(ul.content:empty){
          display: none;
        }
        &:last-child {
          border: none;
        }
      }
    }
  }
}
```

Quartz 4 memberikan atau menggunakan *class* “folder-outer” pada setiap daftar item yang ada, jadi saya menggunakan *class* tersebut untuk memulai.

---
**Baca juga:**
- [[mengubah-scrollbar-pada-quartz|Mengubah Tampilan Scrollbar pada Quartz 4]]
- [[mengubah-teks-footnotes-menjadi-teks-lain|Mengubah Teks “Footnotes” Menjadi Teks Lain dengan CSS]]