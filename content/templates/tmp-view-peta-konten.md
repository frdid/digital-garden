Cek fail disini → [[<% tp.file.title.substring(3) %>]]

## Tanpa Judul
---
```dataview
TABLE WITHOUT ID file.link AS "Fail" 
FROM 
	"content"
	AND -"content/dv-view" 
	AND outgoing([[<% tp.file.title.substring(3) %>]])
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
	AND outgoing([[<% tp.file.title.substring(3) %>]]) 
WHERE title AND title != "Beranda" 
```
