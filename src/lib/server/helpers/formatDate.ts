export function formatDate(dateString:any) {
    return new Date(dateString).toLocaleDateString("en-US", {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        }
    )
}
