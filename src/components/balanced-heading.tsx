import Balancer from 'react-wrap-balancer'

export default function BalancedHeading(
    {children, h=1}: {children: React.ReactNode, h: 1 | 2 | 3 | 4 | 5 | 6}
): JSX.Element {
    const balancedContent = <Balancer>{children}</Balancer>;
    switch (h) {
        case 1:
            return <h1>{balancedContent}</h1>
        case 2:
            return <h2>{balancedContent}</h2>
        case 3:
            return <h3>{balancedContent}</h3>
        case 4:
            return <h4>{balancedContent}</h4>
        case 5:
            return <h5>{balancedContent}</h5>
        case 6:
            return <h6>{balancedContent}</h6>
        default:
            throw new Error('h must be 1, 2, 3, 4, 5, or 6');
    }
}