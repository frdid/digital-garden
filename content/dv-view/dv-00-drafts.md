---
title: DV Drafts
description: 
permalink: 
aliases:
  - DV Drafts
tags: 
draft: true
date: 2024-10-13
---
# Semua draft
```dataview
TABLE
	WITHOUT ID link(file.link, title) AS "Fail"
FROM "content"
	AND -"content/dv-view"
	AND -"content/templates"
WHERE draft
```
