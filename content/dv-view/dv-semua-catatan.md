---
title: Dataview Semua Catatan
description: 
permalink: 
aliases: 
tags: 
draft: true
date: 2024-10-07
---

## Tanpa Judul
---
```dataview
TABLE WITHOUT ID file.link AS "Fail" 
FROM 
	"content/semua-catatan"
WHERE !title
```


---
## Terhubung
---
```dataview
TABLE 
	WITHOUT ID link(file.link, title) AS "Judul", 
	link(file.inlinks, file.inlinks.title) AS "Inlinks" 
FROM 
	"content/semua-catatan"
WHERE 
	title 
	AND title != "Semua Catatan" 
```
