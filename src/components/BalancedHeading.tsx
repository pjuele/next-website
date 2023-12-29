import Balancer from 'react-wrap-balancer'

export default function BalancedHeading(
    {children}: {children: React.ReactNode}
): JSX.Element {
    return <h1><Balancer>{children}</Balancer></h1>
}