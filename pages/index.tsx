import { Layout, Page, Text, List } from '@vercel/examples-ui'

export default function Index() {
  return (
    <Page>
      <Text variant="h2" className="mb-6">
        Password-protected page demo
      </Text>
      <List>
        home
      </List>
    </Page>
  )
}

Index.Layout = Layout
