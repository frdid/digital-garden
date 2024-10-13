---
title: DV Zettelkasten
description: 
permalink: 
aliases:
  - DV Zettelkasten
tags: 
draft: true
date: 2024-10-13
---
# Belum Tercantum
---
```dataview
TABLE
	WITHOUT ID link(file.link, title) AS "Fail"
FROM "content"
	AND -"content/dv-view"
	AND -"content/templates"
	AND !outgoing([[cm-zettelkasten]])
WHERE 
	indexes = [[cm-zettelkasten]]
```


# Semua
---
```dataview
TABLE
	WITHOUT ID link(file.link, title) AS "Fail"
FROM "content"
	AND -"content/dv-view"
	AND -"content/templates"
WHERE 
	indexes = [[cm-zettelkasten]]
```