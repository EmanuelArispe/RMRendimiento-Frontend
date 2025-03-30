// eslint-disable-next-line react/prop-types
export default function ButtonComponent({children, onSelect}) {
    return (
        <button onClick={onSelect} className="btn btn-primary">{children}</button>
    )
}