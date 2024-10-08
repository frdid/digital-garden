---
title: Dataview Obsidian
description: 
permalink: 
aliases: 
tags: 
draft: true
date: 2024-10-07
---
Cek fail disini → [[obsidian]]

## Tanpa Judul
---
```dataview
TABLE WITHOUT ID file.link AS "Fail" 
FROM 
	"content"
	AND -"content/dv-view" 
	AND [[obsidian]]
WHERE !title
```


---
## Terhubung
---
```dataview
TABLE 
	WITHOUT ID link(file.link, title) AS "Judul", 
	link(file.inlinks, file.inlinks.title) AS "Inlinks", 
	link(file.outlinks, file.outlinks.title) AS "Outlink"
FROM 
	"content" 
	AND -"content/dv-view"
	AND [[obsidian]] 
WHERE title AND title != "Beranda" 
```
