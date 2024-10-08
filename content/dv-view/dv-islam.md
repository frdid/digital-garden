---
title: Dataview Islam
description: 
permalink: 
aliases: 
tags: 
draft: true
date: 2024-10-07
---
Cek fail disini → [[islam]]

## Tanpa Judul
---
```dataview
TABLE WITHOUT ID file.link AS "Fail" 
FROM 
	"content"
	AND -"content/dv-view" 
	AND outgoing([[islam]])
WHERE !title
```


---
## Terhubung
---
```dataview
TABLE 
	WITHOUT ID link(file.link, title) AS "Judul", 
	link(file.inlinks, file.inlinks.title) AS "Inlinks", 
	link(file.outlinks, file.outlinks.title) AS "Outlinks"
FROM 
	"content" 
	AND -"content/dv-view"
	AND outgoing([[islam]]) 
WHERE title AND title != "Beranda" 
```
