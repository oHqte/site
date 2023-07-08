export function formatDate(dateString: Date | undefined): string {
	return new Date(dateString ?? "").toLocaleDateString("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric"
	});
}
