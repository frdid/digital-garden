---
title: DV Kepenulisan
description: 
permalink: 
aliases:
  - DV Kepenulisan
tags: 
draft: true
date: 2024-10-07
---
# Belum Tercantum
---
```dataview
TABLE
	WITHOUT ID link(file.link, title) AS "Fail"
FROM "content"
	AND -"content/dv-view"
	AND -"content/templates"
	AND !outgoing([[cm-kepenulisan]])
WHERE 
	indexes = [[cm-kepenulisan]]
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
	indexes = [[cm-kepenulisan]]
```