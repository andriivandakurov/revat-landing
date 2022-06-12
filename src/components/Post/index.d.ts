interface PageData {
  id: string
  title: string
}

interface PageContext {
  data: PageData
}

export interface PostProps {
  pageContext: PageContext
}
