---
title: DV Tanpa Index
description: 
permalink: 
aliases:
  - DV Tanpa Index
tags: 
draft: true
date: 2024-10-13
---
# Main
---
```dataview
TABLE
	WITHOUT ID link(file.link, title) AS "Fail"
FROM "content/main"
	AND -"content/dv-view"
	AND -"content/templates"
WHERE !indexes OR indexes = null
	AND file.name != "index"
```