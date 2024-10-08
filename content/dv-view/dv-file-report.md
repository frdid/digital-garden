---
title: Dataview Last Created
description: 
permalink: 
aliases: 
tags: 
draft: true
date: 2024-10-07
---
### Hari Ini
---
```dataview
TABLE
	WITHOUT ID link(file.link, title) AS "Fail"
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

### Semua Catatan
---
```dataview
TABLE
	WITHOUT ID date AS "Tanggal", link(file.link, title) + " (" + substring(file.folder, 7) + ") " AS "Fail"
FROM "content"
	AND -"content/templates"
	AND -"content/dv-view"
SORT file.ctime DESC
```