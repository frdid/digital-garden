---
title: DV Second Brain
description: 
permalink: 
aliases:
  - DV Second Brain
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
	AND !outgoing([[cm-second-brain]])
WHERE 
	indexes = [[cm-second-brain]]
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
	indexes = [[cm-second-brain]]
```