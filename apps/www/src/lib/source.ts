import { loader } from "fumadocs-core/source"
import { blogs, docs } from "@/.source"

export const source = loader({
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
})

export const blogSource = loader({
  baseUrl: "/blogs",
  source: blogs.toFumadocsSource(),
})