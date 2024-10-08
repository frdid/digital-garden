---
title: Dataview Tanpa Link
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
## Belum ada Inlinks
---
```dataview
TABLE 
	WITHOUT ID link(file.link, title) AS "Judul", 
	link(file.inlinks, file.inlinks.title) AS "Inlinks", 
	link(file.outlinks, file.outlinks.title) AS "Outlink"
FROM 
	"content/semua-catatan"
WHERE 
	title 
	AND title != "Semua Catatan" 
	AND !file.inlinks
```
