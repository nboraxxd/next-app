import { Html, Preview, Body, Container, Text, Link, Tailwind } from '@react-email/components'

export default function WelcomeTemplate({ name }: { name: string }) {
  return (
    <Html>
      <Preview>Welcome aboard!</Preview>
      <Tailwind>
        <Body className="bg-white">
          <Container>
            <Text className="text-2xl font-bold">Hello {name}</Text>
            <Link href="https://codewithmosh.com">www.codewithmosh.com</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
