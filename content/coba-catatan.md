---
title: Coba Catatan
description: 
permalink: 
aliases: 
tags: 
draft: false
date: 2024-10-10
publish: true
share: true
---
Keterangan:
- Kolom `Masuk` adalah *Inlinks*.
- Kolom `Keluar` adalah *Outlinks*.
 
### Hari Ini  
---
```dataview
TABLE
	WITHOUT ID link(file.link, title) AS "Fail",
	link(file.inlinks, file.inlinks.title) AS "Masuk"
FROM "content"
	AND -"content/templates"
	AND -"content/dv-view"
WHERE date = date(today)
SORT file.ctime DESC
```


---

### Kemarin
---
```dataview
TABLE WITHOUT ID link(file.link, title) AS "Fail"
FROM "content"
	AND -"content/templates"
	AND -"content/dv-view"
WHERE date = date(yesterday)
SORT file.ctime DESC
```


---

### Semua Catatan (Total: `$= dv.pages('"content"').length` Catatan)
---
```dataview
TABLE
	WITHOUT ID date AS "Tanggal", link(file.link, title) + " (" + substring(file.folder, 7) + ") " AS "Fail"
FROM "content"
	AND -"content/templates"
	AND -"content/dv-view"
SORT file.ctime DESC
LIMIT 50
```