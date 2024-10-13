---
title: 
description: 
permalink: 
aliases: 
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
	AND !outgoing([[cm-bahasa-indonesia]])
WHERE 
	indexes = [[cm-bahasa-indonesia]]
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
	indexes = [[cm-bahasa-indonesia]]
```