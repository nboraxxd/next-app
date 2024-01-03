import { Html, Preview, Body, Container, Text, Link } from '@react-email/components'

export default function WelcomeTemplate({ name }: { name: string }) {
  return (
    <Html>
      <Preview>Welcome aboard!</Preview>
      <Body>
        <Container>
          <Text>Hello {name}</Text>
          <Link href='https://codewithmosh.com'>www.codewithmosh.com</Link>
        </Container>
      </Body>
    </Html>
  )
}
