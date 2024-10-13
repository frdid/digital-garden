# Belum Tercantum
---
```dataview
TABLE
	WITHOUT ID link(file.link, title) AS "Fail"
FROM "content"
	AND -"content/dv-view"
	AND -"content/templates"
	AND !outgoing([[cm-<% tp.file.title.substring(3) %>]])
WHERE 
	indexes = [[cm-<% tp.file.title.substring(3) %>]]
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
	indexes = [[cm-<% tp.file.title.substring(3) %>]]
```