export const Sidebar = ({ items }: {
    items: {
        name: string,
        href: string
    }[]
}) => {
    return (
        <div>
            {items.map((item) => {
                return (<div key={item.href}>
                    <a role="navigation" href={item.href}>{ item.name}</a>
                </div>)
            })}
        </div>
    )
}

