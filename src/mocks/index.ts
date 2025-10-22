export async function startMock() {
    if (typeof window === "undefined") {
        // Server-side
        const { server } = await import("./node");
        server.listen();
        console.log("🟢 MSW (Node) mock server running");
    } else {
        // Client-side
        const { worker } = await import("./browser");
        await worker.start();
        console.log("🟢 MSW (Browser) mock worker running");
    }
}
