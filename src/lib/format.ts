export function formatDate(date: Date) {
	return date.toLocaleString("vi-VN", {hour12: true, dateStyle: "long"});
}
