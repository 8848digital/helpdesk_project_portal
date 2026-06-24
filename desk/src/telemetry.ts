import { useTelemetry } from "frappe-ui/frappe";

interface CaptureOptions {
	data: {
		user?: string;
		[key: string]: string | number | boolean | object;
	};
}

export function capture(
	event: string,
	options: CaptureOptions = { data: {} }
) {
	const { capture: _capture } = useTelemetry();
	_capture(event, options.data);
}

// Dummy implementation for compatibility with App.vue
export function recordSession() {
	// No-op
}

// Dummy implementation for compatibility with App.vue
export function stopSession() {
	// No-op
}

// Dummy implementation for compatibility
export async function init() {
	// No-op
}

// Dummy plugin for compatibility
export function posthogPlugin(app: any) {
	// No-op
}
