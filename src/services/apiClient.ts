// This is just a very simple API client, not intended for production use.

export interface ApiResponse {
    data?: unknown;
    success: boolean;
    httpStatus?: number;
    error?: string;
}

export class ApiClient {
    async get(url: string): Promise<ApiResponse> {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            return {
                success: false,
                httpStatus: response.status,
                error: response.statusText
            };
        }

        const json = await response.json();

        return {
            data: json,
            success: true
        };
    }
}

export const apiClient = new ApiClient();
