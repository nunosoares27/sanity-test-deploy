# Example of query to get jobs

```
*[_type == "jobs"]{
  _id,
  name,
  description,
  startDate,
  endDate,
  created_at,
  edited_at,
  "image": image.asset->url,
  "caption": image.caption
}
```

