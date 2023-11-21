import { SignIn } from '@clerk/nextjs'

const SignInPage = () => {
  return <SignIn afterSignInUrl={'/journal'} redirectUrl={'/journal'} />
}

export default SignInPage
