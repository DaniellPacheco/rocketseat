export function TextWithLimit({text, limit, suffix}) {
    const truncatedText = text.length > limit ? text.slice(0, limit) + "...": text;

    return (
        <p>
            {truncatedText}
        </p>
    )
}